import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { themeObj } from '../styles/theme'
import Layout from './Layout'

function App() {
  const [themeState, setThemeState] = useState<string>('light')

  const { lightTheme, darkTheme } = themeObj

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeState === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Route exact path='/'>
          <Layout setThemeState={setThemeState} />
        </Route>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
