import { HiddeSidebarButton } from './HiddeSidebarToggle.styles'
import { useDarkMode } from 'src/hooks/useDarkMode'

export default function HiddeSidebarToggle() {
  const { setLeftCompleteSidebar } = useDarkMode()

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
