import { navegationLinks } from './navegationLinks'
import { NavStyled } from './nav.styles'
import NavLinkStyledComponent from './NavLinkStyled/NavLinkStyled'

export default function Nav() {
  return (
    <NavStyled>
      {navegationLinks.map((navegationLink) => (
        <NavLinkStyledComponent navegationLink={navegationLink} key={navegationLink.linkName} />
      ))}
    </NavStyled>
  )
}
