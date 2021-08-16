import { Context } from 'src/context/Context'
import { GlobalStyles } from 'src/styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { themes } from 'src/styles/theme'
import { useEffect, useContext } from 'react'
import DetectIsOnlineModal from 'src/modals/components/DetectIsOnlineModal'
import Layout from '../Layout'
import { nanoid } from 'nanoid'

/**
 * This component is to use the context provider
 * using the state value
 * but not the initial value
 */
export default function AppContainer() {
  const { isDarkMode, setIsDarkMode } = useContext(Context)

  useEffect(() => {
    const storageTheme: string | null = localStorage.getItem('themeMode')
    console.log(storageTheme)

    if (storageTheme === 'light') {
      setIsDarkMode(false)
    } else {
      setIsDarkMode(true)
    }
  }, [])

  const { lightTheme, darkTheme } = themes

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles key={nanoid()} />
      <DetectIsOnlineModal key={nanoid()} />
      <Layout />
    </ThemeProvider>
  )
}
