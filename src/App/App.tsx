import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header/Header'
import { themeObj } from '../styles/theme'
import { GlobalStyles } from '../styles/global'
import ToggleTheme from '../components/ToggleTheme/ToggleTheme'
import Nav from '../components/Header/Nav/Nav'

function App() {
  const [themeState, setThemeState] = useState<string>('light')

  const { lightTheme, darkTheme } = themeObj

  console.log(themeState)

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeState === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className='App'>
          <div>
            <Header>
              <Nav />
              <ToggleTheme setThemeState={setThemeState} />
            </Header>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
