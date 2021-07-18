import { BrowserRouter } from 'react-router-dom'
import AppContainer from './AppContainer'
import ContextProvider from '../context/ContextProvider'

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
