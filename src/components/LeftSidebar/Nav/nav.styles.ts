import { mediaQueries } from 'src/styles/mediaQueries'
import { NavLink } from 'react-router-dom'
import { socialLinkStyled } from '../commonSocialLinkStyled'
import styled from 'styled-components'

export const NavStyled = styled.div`
  margin-top: 10px;
  padding: 0 25px;

  @media (min-width: ${mediaQueries.lg}) {
    padding: 0 20px;
  }
`

export const NavLinkImg = styled.img`
  margin-right: 15px;
`

export const NavLinkStyled = styled(NavLink)`
  ${socialLinkStyled};

   &:hover {
    ${NavLinkImg} {
      transform: scale(1.05);
      -o-transform: scale(1.05);
    }
`

export const NavAnchorStyled = styled.a`
  ${socialLinkStyled}

  &:hover {
    ${NavLinkImg} {
      transform: scale(1.05);
      -o-transform: scale(1.05);
    }
  }
`
