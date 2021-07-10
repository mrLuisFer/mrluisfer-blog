import homeIcon from 'src/assets/icons/home-icon.svg'
import aboutIcon from 'src/assets/icons/about-icon.svg'
import portfolioIcon from 'src/assets/icons/portfolio-icon.svg'
import { NavegationLinks } from 'src/types/navegationLinks'
import { urls } from 'src/Routes/routeUrls'

type TNavegationA = {
  exact?: boolean
  externalLink?: boolean
}

export type TNavegation = TNavegationA & NavegationLinks

export const navegationLinks: Array<TNavegation> = [
  {
    linkName: 'Home',
    url: urls.rootUrl,
    exact: true,
    iconSvg: homeIcon,
    altIconSvg: 'Home',
  },
  {
    linkName: 'About',
    url: urls.aboutUrl,
    iconSvg: aboutIcon,
    altIconSvg: 'About',
  },
  {
    linkName: 'Portfolio',
    url: 'https://mrluisfer.netlify.app/',
    iconSvg: portfolioIcon,
    altIconSvg: 'Portfolio',
    externalLink: true,
  },
]
