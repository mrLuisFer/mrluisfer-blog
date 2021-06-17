import Facebook from 'src/assets/socialMediaIcons/facebook.svg'
import Github from 'src/assets/socialMediaIcons/github.svg'

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
]
