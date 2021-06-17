import Nav from './Nav/Nav'
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks'
import { LeftSidebarStyled, LeftSidebarTitle, LineSeparate } from './leftSidebar.styles'

export default function LeftSidebar() {
  return (
    <LeftSidebarStyled>
      <LeftSidebarTitle>
        <span>mr</span>LuisFer
      </LeftSidebarTitle>
      <Nav />
      <LineSeparate lineMargin='40px 0' />
      <SocialMediaLinks />
    </LeftSidebarStyled>
  )
}
