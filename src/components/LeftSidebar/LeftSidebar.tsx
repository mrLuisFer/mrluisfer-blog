import Nav from './Nav/Nav'
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks'
import Footer from './Footer/Footer'
import { ThemeStateFnuc } from 'src/App/setTheme'
import ThemeToggle from './ThemeToggle/ThemeToggle'
import { LeftSidebarStyled, LeftSidebarTitle, LineSeparate } from './leftSidebar.styles'

export default function LeftSidebar({ setIsDarkMode, isDarkMode }: ThemeStateFnuc) {
  return (
    <LeftSidebarStyled>
      <LeftSidebarTitle>
        <span>mr</span>LuisFer
      </LeftSidebarTitle>
      <ThemeToggle setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Nav />
      <LineSeparate lineMargin='20px 0' />
      <SocialMediaLinks />
      <LineSeparate lineMargin='20px 0' />
      <Footer />
    </LeftSidebarStyled>
  )
}
