import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { themeObj } from '../styles/theme'
import Layout from './Layout'

function App() {
  const [themeState, setThemeState] = useState<string>('light')

  const { lightTheme, darkTheme } = themeObj

  console.log(themeState)

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeState === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Layout setThemeState={setThemeState} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
