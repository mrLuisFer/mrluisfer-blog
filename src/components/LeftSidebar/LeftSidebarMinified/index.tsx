import { LeftSidebarMinifiedStyled } from './LeftSidebarMinified.styles'
import ThemeToggle from '../ThemeToggle/index'

export default function LeftSidebarMinified() {
  return (
    <LeftSidebarMinifiedStyled>
      <ThemeToggle />
      <p>Show complete sidebar</p>
    </LeftSidebarMinifiedStyled>
  )
}
