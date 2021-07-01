import { BrowserRouter } from 'react-router-dom'
import ContextProvider from '../context/ContextProvider'
import AppContainer from './AppContainer/AppContainer'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AppContainer />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
