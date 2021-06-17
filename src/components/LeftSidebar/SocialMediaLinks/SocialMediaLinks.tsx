import {
  SocialMediaLinksStyled,
  SocialMediaLink,
  SocialMediaLinkIcon,
} from './socialMediaLinks.styles'
import { socialMediaLinks } from './socialMediaLinks'

export default function SocialMediaLinks() {
  return (
    <SocialMediaLinksStyled>
      {socialMediaLinks.map(({ altIconSvg, iconSvg, linkName, url }) => (
        <SocialMediaLink href={url}>
          <SocialMediaLinkIcon src={iconSvg} alt={altIconSvg} />
          {linkName}
        </SocialMediaLink>
      ))}
    </SocialMediaLinksStyled>
  )
}
