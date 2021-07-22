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

type NavLinkImgProps = {
  isDarkMode: boolean
}

export const NavLinkImg = styled.img<NavLinkImgProps>`
  margin-right: 15px;
  filter: ${(props) => props.isDarkMode && 'brightness(1.6)'};
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
