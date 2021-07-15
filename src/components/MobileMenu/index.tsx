import { MouseEventHandler, useContext } from 'react'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import { navegationLinks } from 'src/components/LeftSidebar/Nav/navegationLinks'
import { MobileMenuStyled } from './MobileMenu.styles'
import ThemeToggle from 'src/components/LeftSidebar/ThemeToggle'
import MenuLinks from './MenuLinks'
import { resourcesLinks } from 'src/components/RightSidebar/Cards/resourcesLinks'
import { LineSeparate } from '../common/LineSeparate/lineSeparate.styles'
import { cssVariables } from 'src/styles/utils/cssVariables'
import MenuResourcesLink from './MenuResourcesLinks'

export default function MobileMenu() {
  console.log(navegationLinks)

  const { setIsOpenMenu } = useContext(MenuMobileContext)

  const handleCloseMenu: MouseEventHandler<HTMLAnchorElement> = (): void => {
    setIsOpenMenu(false)
  }

  return (
    <MobileMenuStyled>
      <ThemeToggle customPadding='0' />
      {navegationLinks.map((link) => (
        <MenuLinks key={link.linkName} link={link} handleCloseMenu={handleCloseMenu} />
      ))}
      <LineSeparate bgColor={cssVariables.dateDarkColor} opacity={0.5} withRadius />
      <h3>Recursos</h3>
      {resourcesLinks.map((resourceLink) => (
        <MenuResourcesLink
          key={resourceLink.title}
          resourceLink={resourceLink}
          handleCloseMenu={handleCloseMenu}
        />
      ))}
    </MobileMenuStyled>
  )
}
