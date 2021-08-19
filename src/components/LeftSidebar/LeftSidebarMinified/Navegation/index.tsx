import { navegationLinks } from '../../Nav/navegationLinks'
import { SidebarListItem, SidebarLink, SidebarAnchor, SidebarList } from './Navegation.styles'
import SidebarLinkImg from './SidebarLinkImg'

export default function Navegation() {
  return (
    <nav>
      <SidebarList>
        {navegationLinks.map((link) => (
          <SidebarListItem key={link.linkName}>
            {link.externalLink ? (
              <SidebarAnchor href={link.url} target='_blank' rel='noreferrer'>
                <SidebarLinkImg iconSvg={link.iconSvg} altIconSvg={link.altIconSvg} />
              </SidebarAnchor>
            ) : (
              <SidebarLink to={link.url}>
                <SidebarLinkImg iconSvg={link.iconSvg} altIconSvg={link.altIconSvg} />
              </SidebarLink>
            )}
          </SidebarListItem>
        ))}
      </SidebarList>
    </nav>
  )
}
