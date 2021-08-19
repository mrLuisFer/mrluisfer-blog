import { LeftSidebarTitle } from './leftSidebar.styles'
import { LineSeparate } from '../../common/LineSeparate/lineSeparate.styles'
import { urls } from 'src/Routes/routeUrls'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import ThemeToggle from '../ThemeToggle'
import SideBarScroll from '../../common/SidebarScroll/SidebarScroll'

export default function LeftSidebarComplete() {
  return (
    <SideBarScroll gridArea='left' left>
      <LeftSidebarTitle title='Bienvenido a mi blog' to={urls.rootUrl}>
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
