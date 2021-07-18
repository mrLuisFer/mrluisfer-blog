import './styles/index.css'
import { render } from 'react-dom'
import { StrictMode } from 'react'
import App from './App/App'

/**
 * null is required but cannot be
 * @param {HTMLElement} ROOT
 */
const ROOT: HTMLElement | null = document.getElementById('root')

render(
  <StrictMode>
    <App />
  </StrictMode>,
  ROOT
)
