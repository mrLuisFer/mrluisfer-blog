import { useContext } from 'react'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import { navegationLinks } from 'src/components/LeftSidebar/Nav/navegationLinks'
import { MobileMenuStyled } from './MobileMenu.styles'
import ThemeToggle from 'src/components/LeftSidebar/ThemeToggle'
import MenuLinks from './MenuLinks'

export default function MobileMenu() {
  console.log(navegationLinks)

  const { setIsOpenMenu } = useContext(MenuMobileContext)

  const handleCloseMenu = (): void => {
    setIsOpenMenu(false)
  }

  return (
    <MobileMenuStyled>
      <ThemeToggle customPadding='0' />
      {navegationLinks.map((link) => (
        <MenuLinks key={link.linkName} link={link} handleCloseMenu={handleCloseMenu} />
      ))}
    </MobileMenuStyled>
  )
}
