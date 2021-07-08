import { NavLinkImg, NavLinkStyled, NavAnchorStyled } from '../nav.styles'
import { TNavegation } from '../navegationLinks'

type Props = {
  navegationLink: TNavegation
}

// TODO: Fix this
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
          <NavLinkImgComponent iconSvg={iconSvg} altIconSvg={altIconSvg} />
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
            <NavLinkImgComponent iconSvg={iconSvg} altIconSvg={altIconSvg} />
            {linkName}
          </NavLinkStyled>
        </>
      )}
    </>
  )
}

type NavLinkImgComponentProps = {
  iconSvg: string
  altIconSvg: string
}
const NavLinkImgComponent = ({ iconSvg, altIconSvg }: NavLinkImgComponentProps) => {
  return <NavLinkImg src={iconSvg} alt={altIconSvg} draggable='false' />
}
