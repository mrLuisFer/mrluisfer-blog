import { GlobalStyles } from 'src/styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { themes } from 'src/styles/theme'
import { useEffect, useContext } from 'react'
import DetectIsOnlineModal from 'src/modals/components/DetectIsOnlineModal'
import Layout from '../../Layout'
import { nanoid } from 'nanoid'
import { DarkModeCtx } from 'src/context/DarkModeCtx/DarkModeContext'

export default function AppContainer() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeCtx)

  useEffect(() => {
    const storageTheme: string | null = localStorage.getItem('themeMode')

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
