import Facebook from 'src/assets/socialMediaIcons/facebook.svg'
import Github from 'src/assets/socialMediaIcons/github.svg'
import Twitter from 'src/assets/socialMediaIcons/twitter.svg'
import Linkedin from 'src/assets/socialMediaIcons/linkedin.svg'
import Instagram from 'src/assets/socialMediaIcons/instagram.svg'
import Gmail from 'src/assets/socialMediaIcons/gmail.svg'

export type TSocialMediaLinks = {
  linkName: string
  url: string
  iconSvg: string
  altIconSvg: string
}

export const socialMediaLinks: Array<TSocialMediaLinks> = [
  {
    linkName: 'Facebook',
    url: '',
    iconSvg: Facebook,
    altIconSvg: '',
  },
  {
    linkName: 'Github',
    url: '',
    iconSvg: Github,
    altIconSvg: '',
  },
  {
    linkName: 'Twitter',
    url: '',
    iconSvg: Twitter,
    altIconSvg: '',
  },
  {
    linkName: 'LinkedIn',
    url: '',
    iconSvg: Linkedin,
    altIconSvg: '',
  },
  {
    linkName: 'Instagram',
    url: '',
    iconSvg: Instagram,
    altIconSvg: '',
  },
  {
    linkName: 'Gmail',
    url: '',
    iconSvg: Gmail,
    altIconSvg: '',
  },
]
