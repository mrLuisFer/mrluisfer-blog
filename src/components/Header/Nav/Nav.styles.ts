import { noTapHightlight } from 'src/styles/utils/noTapHightlight'
import styled from 'styled-components'

export const NavStyled = styled.nav`
  display: flex;
`

export const NavDesktopStyled = styled.div`
  display: none;
`

export const NavMenuMobileIcon = styled.img`
  ${noTapHightlight()};
  height: 20px;
  cursor: pointer;
`
