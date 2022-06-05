import { BrowserRouter } from 'react-router-dom'
import AppContainer from './AppContainer'
import DarkModeCtxProvider from 'src/context/DarkModeCtx/DarkModeProvider'

export default function App() {
  return (
    <BrowserRouter>
      <DarkModeCtxProvider>
        <AppContainer />
      </DarkModeCtxProvider>
    </BrowserRouter>
  )
}
