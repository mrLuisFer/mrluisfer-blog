import {
  SocialMediaLinksStyled,
  SocialMediaLink,
  SocialMediaLinkIcon,
} from './socialMediaLinks.styles'
import { socialMediaLinks } from './socialLinks'

export default function SocialMediaLinks() {
  return (
    <SocialMediaLinksStyled>
      {socialMediaLinks.map(({ altIconSvg, iconSvg, linkName, url }) => (
        <SocialMediaLink
          href={url}
          key={linkName}
          fontWeight='400'
          draggable='false'
          target='_blank'
          rel='noreferrer'
        >
          <SocialMediaLinkIcon
            src={iconSvg}
            alt={altIconSvg}
            draggable='false'
            title={altIconSvg}
          />
          {linkName}
        </SocialMediaLink>
      ))}
    </SocialMediaLinksStyled>
  )
}
