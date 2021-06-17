import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavStyled = styled.div`
  padding: 0 25px;
  margin-top: 20px;
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  transition: var(--transition);
  margin: 0;
  font-weight: 500;
  color: ${(props) => props.theme.color};

  &:hover {
    background-color: var(--grey);
  }
`

export const NavLinkImg = styled.img`
  margin-right: 15px;
`
