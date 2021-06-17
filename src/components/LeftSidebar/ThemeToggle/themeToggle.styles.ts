import { userNoSelect } from 'src/styles/utils/userNoSelect'
import styled from 'styled-components'

export const ThemeToggleStyled = styled.div`
  margin-top: 0.5rem;
  padding-left: 35px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  ${userNoSelect()};
  cursor: pointer;
`

export const ThemeToggleIcon = styled.img`
  width: 25px;
  height: 25px;
`

export const ThemeToggleText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color};
`
