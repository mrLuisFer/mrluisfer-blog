import styled from 'styled-components'

export const MenuIconStyled = styled.img`
  width: 35px;
  height: 40px;
  cursor: pointer;
`

export const CloseIconStyled = styled.img`
  width: 28px;
  height: 35px;
  cursor: pointer;
  opacity: 0.5;
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }
`
