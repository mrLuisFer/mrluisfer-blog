import ThemeToggle from '../ThemeToggle/index'
import Navegation from './Navegation'
import ToggleCompleteSidebar from './ToggleCompleteSidebar'
import { LeftSidebarMinifiedStyled } from './LeftSidebarMinified.styles'

export default function LeftSidebarMinified() {
  return (
    <LeftSidebarMinifiedStyled>
      <div>
        <ThemeToggle customPadding='0px' />
        <Navegation />
      </div>
      <ToggleCompleteSidebar />
    </LeftSidebarMinifiedStyled>
  )
}
