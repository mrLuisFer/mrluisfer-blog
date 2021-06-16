import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { themeObj } from '../styles/theme'
import Header from '../components/Header/Header'

function App() {
  const [themeState, setThemeState] = useState<string>('light')

  const { lightTheme, darkTheme } = themeObj

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeState === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header setThemeState={setThemeState} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
