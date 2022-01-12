import { useContext } from 'react'
import { DarkModeCtx } from 'src/context/DarkModeCtx/DarkModeContext'
import { HiddeSidebarButton } from './HiddeSidebarToggle.styles'

export default function HiddeSidebarToggle() {
  const { setLeftCompleteSidebar } = useContext(DarkModeCtx)

  return (
    <div>
      <HiddeSidebarButton
        buttonWidth='100px'
        type='button'
        onClick={() => setLeftCompleteSidebar(false)}
      >
        Ocultar sidebar
      </HiddeSidebarButton>
    </div>
  )
}
