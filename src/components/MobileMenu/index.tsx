import { cssVariables } from 'src/styles/utils/cssVariables'
import { LineSeparate } from '../common/LineSeparate/lineSeparate.styles'
import { MobileMenuStyled } from './MobileMenu.styles'
import { MouseEventHandler } from 'react'
import { navegationLinks } from 'src/components/LeftSidebar/Nav/navegationLinks'
import { resourcesLinks } from 'src/components/RightSidebar/Cards/resourcesLinks'
import MenuLinks from './MenuLinks'
import MenuResourcesLink from './MenuResourcesLinks'
import ThemeToggle from 'src/components/LeftSidebar/ThemeToggle'
import { useMenuMobileContext } from 'src/context/MenuMobileContext'

export default function MobileMenu() {
  const { setIsOpenMenu } = useMenuMobileContext()

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
