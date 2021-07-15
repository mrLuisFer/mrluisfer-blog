import { MouseEventHandler } from 'react'
import { TypeResources } from '../RightSidebar/Cards/Card/types'
import { AnchorStyled, LinkStyled } from './MobileMenu.styles'

export default function MenuResourcesLinks({
  resourceLink,
  handleCloseMenu,
}: {
  resourceLink: TypeResources
  handleCloseMenu: MouseEventHandler<HTMLAnchorElement>
}) {
  return (
    <div key={resourceLink.title}>
      <>
        {resourceLink.external ? (
          <AnchorStyled
            href={resourceLink.url}
            key={resourceLink.title}
            onClick={handleCloseMenu}
            target='_blank'
            rel='noreferrer'
          >
            {resourceLink.title}
          </AnchorStyled>
        ) : (
          <LinkStyled key={resourceLink.title} to={resourceLink.url} onClick={handleCloseMenu}>
            {resourceLink.title}
          </LinkStyled>
        )}
      </>
    </div>
  )
}
