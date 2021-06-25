import homeIcon from 'src/assets/icons/home-icon.svg'
import aboutIcon from 'src/assets/icons/about-icon.svg'
import contactIcon from 'src/assets/icons/contact-icon.svg'
import portfolioIcon from 'src/assets/icons/portfolio-icon.svg'
import { NavegationLinks } from 'src/types/navegationLinks'

type TNavegationA = {
  exact?: boolean
  externalLink?: boolean
}

export type TNavegation = TNavegationA & NavegationLinks

export const navegationLinks: Array<TNavegation> = [
  {
    linkName: 'Home',
    url: '/',
    exact: true,
    iconSvg: homeIcon,
    altIconSvg: 'Home',
  },
  {
    linkName: 'About',
    url: '/about',
    iconSvg: aboutIcon,
    altIconSvg: 'About',
  },
  {
    linkName: 'Contact',
    url: '/contact',
    iconSvg: contactIcon,
    altIconSvg: 'Contact',
  },
  {
    linkName: 'Portfolio',
    url: 'https://mrluisfer.netlify.app/',
    iconSvg: portfolioIcon,
    altIconSvg: 'Portfolio',
    externalLink: true,
  },
]
