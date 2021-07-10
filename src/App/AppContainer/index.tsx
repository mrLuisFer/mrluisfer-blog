import { useEffect, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'src/styles/globalStyles'
import { themes } from 'src/styles/theme'
import { Context } from 'src/context/Context'
import Layout from '../Layout'
import DetectIsOnlineModal from 'src/modals/components/DetectIsOnlineModal'

/**
 * This component is to use the context provider
 * using the state value
 * but not the initial value
 */
export default function AppContainer() {
  const { isDarkMode, setIsDarkMode } = useContext(Context)

  useEffect(() => {
    const storageTheme: string | null = localStorage.getItem('themeMode')

    if (storageTheme === 'light') {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  const { lightTheme, darkTheme } = themes

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Layout />
      <DetectIsOnlineModal />
    </ThemeProvider>
  )
}
