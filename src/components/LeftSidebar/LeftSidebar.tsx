import Nav from './Nav/Nav'
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks'
import Footer from './Footer/Footer'
import ThemeToggle from './ThemeToggle/ThemeToggle'
import SideBarScroll from '../SidebarScroll/SidebarScroll'
import { LineSeparate } from '../LineSeparate/lineSeparate.styles'
import { LeftSidebarTitle } from './leftSidebar.styles'

export default function LeftSidebar() {
  return (
    <SideBarScroll gridArea='left' left>
      <LeftSidebarTitle title='Bienvenido a mi blog'>
        <span>mr</span>LuisFer
      </LeftSidebarTitle>
      <ThemeToggle />
      <Nav />
      <LineSeparate lineMargin='20px 0' />
      <SocialMediaLinks />
      <LineSeparate lineMargin='20px 0' />
      <Footer />
    </SideBarScroll>
  )
}
