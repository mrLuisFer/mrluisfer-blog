import ThemeToggle from '../ThemeToggle/index'
import Navegation from './Navegation'
import ToggleCompleteSidebar from './ToggleCompleteSidebar'
import { LeftSidebarMinifiedStyled } from './LeftSidebarMinified.styles'

export default function LeftSidebarMinified() {
  return (
    <LeftSidebarMinifiedStyled>
      <div>
        <ThemeToggle />
        <Navegation />
      </div>
      <ToggleCompleteSidebar />
    </LeftSidebarMinifiedStyled>
  )
}
