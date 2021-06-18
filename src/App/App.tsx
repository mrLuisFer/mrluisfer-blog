import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { themeObj } from '../styles/theme'
import Layout from './Layout'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const { lightTheme, darkTheme } = themeObj

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Layout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
