import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { socialLinkStyled } from '../commonSocialLinkStyled'
import { mediaQueries } from 'src/styles/mediaQueries'

export const NavStyled = styled.div`
  margin-top: 10px;
  padding: 0 25px;

  @media (min-width: ${mediaQueries.lg}) {
    padding: 0 20px;
  }
`

export const NavLinkStyled = styled(NavLink)`
  ${socialLinkStyled};
`
export const NavAnchorStyled = styled.a`
  ${socialLinkStyled}
`

export const NavLinkImg = styled.img`
  margin-right: 15px;

  &:hover {
    transform: scale(1.05);
    -o-transform: scale(1.05);
  }
`
