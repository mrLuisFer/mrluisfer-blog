import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { paddingContainer } from 'src/styles/utils/paddingContainer'
import { noTapHightlight } from 'src/styles/utils/noTapHightlight'

export const MenuMobileModalBg = styled.div`
  ${paddingContainer()}
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  height: 100vh;
`

export const MenuMobileFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MenuMobileCloseIcon = styled.img`
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export const NavLinksContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  align-items: center;
  margin-top: 2rem;
`

export const MenuMobileLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #ffffff;
  width: 150px;
  ${noTapHightlight()};
`
