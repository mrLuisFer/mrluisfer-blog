import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { socialLinkStyled } from '../socialLinkStyled'

export const NavStyled = styled.div`
  padding: 0 25px;
  margin-top: 20px;
`

export const NavLinkStyled = styled(NavLink)`
  ${socialLinkStyled}
`

export const NavLinkImg = styled.img`
  margin-right: 15px;
`
