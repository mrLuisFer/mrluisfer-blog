import { mediaQueries } from 'src/styles/mediaQueries'
import { socialLinkStyled } from '../commonSocialLinkStyled'
import styled from 'styled-components'

export const SocialMediaLinksStyled = styled.div`
  padding: 0 25px;

  @media (min-width: ${mediaQueries.lg}) {
    padding: 0 20px;
  }
`

export const SocialMediaLink = styled.a`
  ${socialLinkStyled}
`

export const SocialMediaLinkIcon = styled.img`
  margin-right: 15px;

  &:hover {
    transform: scale(1.05);
    -o-transform: scale(1.05);
  }
`
