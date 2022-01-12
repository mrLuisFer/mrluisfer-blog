import { BrowserRouter } from 'react-router-dom'
import AppContainer from './AppContainer'
import DarkModeCtxProvider from 'src/context/DarkModeCtx/DarkModeProvider'

function App() {
  return (
    <BrowserRouter>
      <DarkModeCtxProvider>
        <AppContainer />
      </DarkModeCtxProvider>
    </BrowserRouter>
  )
}

export default App
