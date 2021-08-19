import { useContext } from 'react'
import { Context } from 'src/context/Context'
import { HiddeSidebarButton } from './HiddeSidebarToggle.styles'

export default function HiddeSidebarToggle() {
  const { setLeftCompleteSidebar } = useContext(Context)

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
