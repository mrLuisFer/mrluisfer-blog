type TNavLinks = {
  text: string
  url: string
  externalLink?: Boolean | boolean
  id: number
  exact?: boolean
}

export const navLinks: Array<TNavLinks> = [
  {
    text: 'Home',
    url: '/',
    id: 1,
    exact: true,
  },
  {
    text: 'About',
    url: '/about',
    id: 2,
  },
  {
    text: 'Contacto',
    url: '/contact',
    id: 3,
  },
  {
    text: 'Portfolio',
    url: 'https://mrluisfer.netlify.app/',
    externalLink: true,
    id: 4,
  },
]
