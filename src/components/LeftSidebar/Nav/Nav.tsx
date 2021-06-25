import { navegationLinks } from './navegationLinks'
import NavLinkStyledComponent from './NavLinkStyled/NavLinkStyled'
import { NavStyled } from './nav.styles'

export default function Nav() {
  return (
    <NavStyled>
      {navegationLinks.map((navegationLink) => (
        <NavLinkStyledComponent navegationLink={navegationLink} key={navegationLink.linkName} />
      ))}
    </NavStyled>
  )
}
