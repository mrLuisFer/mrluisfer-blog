import { useContext } from 'react'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import { navegationLinks } from 'src/components/LeftSidebar/Nav/navegationLinks'
import { MobileMenuStyled, AnchorStyled, LinkStyled } from './MobileMenu.styles'
import ThemeToggle from 'src/components/LeftSidebar/ThemeToggle'

export default function MobileMenu() {
  console.log(navegationLinks)

  const { setIsOpenMenu } = useContext(MenuMobileContext)

  const handleCloseMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <MobileMenuStyled>
      <ThemeToggle customPadding='0' />
      {navegationLinks.map((link) => (
        <>
          {link.externalLink ? (
            <AnchorStyled
              href={link.url}
              key={link.linkName}
              onClick={handleCloseMenu}
              target='_blank'
              rel='noreferrer'
            >
              {link.linkName}
            </AnchorStyled>
          ) : (
            <LinkStyled key={link.linkName} to={link.url} onClick={handleCloseMenu}>
              {link.linkName}
            </LinkStyled>
          )}
        </>
      ))}
    </MobileMenuStyled>
  )
}
