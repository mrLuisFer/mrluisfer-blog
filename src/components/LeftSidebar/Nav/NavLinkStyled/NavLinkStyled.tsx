import { NavLinkImg, NavLinkStyled, NavAnchorStyled } from '../nav.styles'
import { TNavegation } from '../navegationLinks'
import { useDarkMode } from 'src/hooks/useDarkMode'

type Props = {
  navegationLink: TNavegation
}

// TODO: Fix this
export default function NavLinkStyledComponent({ navegationLink }: Props) {
  const { url, externalLink, altIconSvg, iconSvg, linkName, exact } = navegationLink

  return (
    <div>
      {/* TODO: think in a better way to use anchors and Link at the same component */}
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
        <div>
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
        </div>
      )}
    </div>
  )
}

type NavLinkImgComponentProps = {
  iconSvg: string
  altIconSvg: string
}
const NavLinkImgComponent = ({ iconSvg, altIconSvg }: NavLinkImgComponentProps) => {
  const { isDarkMode } = useDarkMode()

  return <NavLinkImg src={iconSvg} alt={altIconSvg} draggable='false' isDarkMode={isDarkMode} />
}
