import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { socialLinkStyled } from '../commonSocialLinkStyled'

export const NavStyled = styled.div`
  margin-top: 10px;
  padding: 0 25px;
`

export const NavLinkStyled = styled(NavLink)`
  ${socialLinkStyled};
`

export const NavLinkImg = styled.img`
  margin-right: 15px;
`
