import { useEffect, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global'
import { themeObj } from '../../styles/theme'
import Layout from '../Layout'
import { ThemeContext } from '../ThemeContext/ThemeContext'

/**
 * This component is to use the context provider
 * using the state value
 * but not the initial value
 */
export default function AppContainer() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    const storageTheme: string | null = localStorage.getItem('themeMode')

    if (storageTheme === 'light') {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  const { lightTheme, darkTheme } = themeObj

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}
