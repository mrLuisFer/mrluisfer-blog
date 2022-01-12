import { GlobalStyles } from 'src/styles/globalStyles'
import { nanoid } from 'nanoid'
import { ThemeProvider } from 'styled-components'
import { themes } from 'src/styles/theme'
import { useDarkMode } from 'src/hooks/useDarkMode'
import { useEffect } from 'react'
import DetectIsOnlineModal from 'src/modals/components/DetectIsOnlineModal'
import Layout from 'src/layout'

export default function AppContainer() {
  const { isDarkMode, setIsDarkMode } = useDarkMode()

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
