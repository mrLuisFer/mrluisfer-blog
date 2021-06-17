import Nav from './Nav/Nav'
import { LeftSidebarStyled, LeftSidebarTitle } from './leftSidebar.styles'

export default function LeftSidebar() {
  return (
    <LeftSidebarStyled>
      <LeftSidebarTitle>
        <span>mr</span>LuisFer
      </LeftSidebarTitle>
      <Nav />
    </LeftSidebarStyled>
  )
}
