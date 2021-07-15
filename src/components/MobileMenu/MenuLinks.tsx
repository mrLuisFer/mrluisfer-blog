import { MouseEventHandler } from 'react'
import { TNavegation } from 'src/components/LeftSidebar/Nav/navegationLinks'
import { AnchorStyled, LinkStyled } from './MobileMenu.styles'

type MenuLinksProps = {
  link: TNavegation
  handleCloseMenu: MouseEventHandler<HTMLAnchorElement>
}

export default function MenuLinks({ link, handleCloseMenu }: MenuLinksProps) {
  return (
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
  )
}
