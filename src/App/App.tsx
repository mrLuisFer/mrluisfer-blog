import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './ThemeContext/ThemeContext'
import AppContainer from './AppContainer/AppContainer'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AppContainer />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
