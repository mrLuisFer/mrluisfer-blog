import { NavLinkImg, NavLinkStyled, NavAnchorStyled } from '../nav.styles'
import { TNavegation } from '../navegationLinks'

type Props = {
  navegationLink: TNavegation
}

export default function NavLinkStyledComponent({ navegationLink }: Props) {
  const { url, externalLink, altIconSvg, iconSvg, linkName, exact } = navegationLink

  return (
    <>
      {externalLink ? (
        <NavAnchorStyled
          href={url}
          key={linkName}
          fontWeight='500'
          draggable='false'
          target='_blank'
          rel='noreferrer'
        >
          <NavLinkImg src={iconSvg} alt={altIconSvg} draggable='false' />
          {linkName}
        </NavAnchorStyled>
      ) : (
        <>
          <NavLinkStyled
            to={url}
            exact={exact}
            key={linkName}
            fontWeight='500'
            draggable='false'
            activeClassName='activeClassname'
          >
            <NavLinkImg src={iconSvg} alt={altIconSvg} draggable='false' />
            {linkName}
          </NavLinkStyled>
        </>
      )}
    </>
  )
}