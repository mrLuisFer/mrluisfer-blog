import Facebook from 'src/assets/socialMediaIcons/facebook.svg'
import Github from 'src/assets/socialMediaIcons/github.svg'
import Twitter from 'src/assets/socialMediaIcons/twitter.svg'
import Linkedin from 'src/assets/socialMediaIcons/linkedin.svg'
import Instagram from 'src/assets/socialMediaIcons/instagram.svg'
import Gmail from 'src/assets/socialMediaIcons/gmail.svg'
import { NavegationLinks } from 'src/types/navegationLinks'

export const socialMediaLinks: Array<NavegationLinks> = [
  {
    linkName: 'Facebook',
    url: 'https://www.facebook.com/mrLuisFer/',
    iconSvg: Facebook,
    altIconSvg: 'Facebook',
  },
  {
    linkName: 'Github',
    url: 'https://github.com/mrLuisFer',
    iconSvg: Github,
    altIconSvg: 'Github',
  },
  {
    linkName: 'Twitter',
    url: 'https://twitter.com/_mrLuisFer',
    iconSvg: Twitter,
    altIconSvg: 'Twitter',
  },
  {
    linkName: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mrluisfer/',
    iconSvg: Linkedin,
    altIconSvg: 'LinkedIn',
  },
  {
    linkName: 'Instagram',
    url: 'https://www.instagram.com/mrluisfer_/',
    iconSvg: Instagram,
    altIconSvg: 'Instagram',
  },
  {
    linkName: 'Gmail',
    url: 'mailto:mrluisfeer@gmail.com',
    iconSvg: Gmail,
    altIconSvg: 'Gmail',
  },
]
