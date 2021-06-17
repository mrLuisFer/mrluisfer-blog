import { navegationLinks } from './navegationLinks'

import { NavLinkStyled, NavStyled, NavLinkImg } from './nav.styles'

export default function Nav() {
  return (
    <NavStyled>
      {navegationLinks.map(({ linkName, url, exact, iconSvg, altIconSvg }) => (
        <NavLinkStyled to={url} exact={exact} key={linkName}>
          <NavLinkImg src={iconSvg} alt={altIconSvg} />
          {linkName}
        </NavLinkStyled>
      ))}
    </NavStyled>
  )
}
