import './styles/index.css'
import { render } from 'react-dom'
import { StrictMode } from 'react'
import App from './app'

const ROOT: HTMLElement = document.getElementById('root')!

render(
  <StrictMode>
    <App />
  </StrictMode>,
  ROOT
)
