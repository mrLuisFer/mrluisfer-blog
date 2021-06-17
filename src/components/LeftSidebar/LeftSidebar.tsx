import Nav from './Nav/Nav'
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks'
import Footer from './Footer/Footer'
import { LeftSidebarStyled, LeftSidebarTitle, LineSeparate } from './leftSidebar.styles'

import { ThemeStateFnuc } from 'src/App/setTheme'

export default function LeftSidebar({ setThemeState }: ThemeStateFnuc) {
  return (
    <LeftSidebarStyled>
      <LeftSidebarTitle>
        <span>mr</span>LuisFer
      </LeftSidebarTitle>
      <Nav />
      <LineSeparate lineMargin='20px 0' />
      <SocialMediaLinks />
      <LineSeparate lineMargin='20px 0' />
      <Footer />
    </LeftSidebarStyled>
  )
}
