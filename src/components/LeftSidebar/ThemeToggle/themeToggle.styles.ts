import styled from 'styled-components'
import { userNoSelect } from 'src/styles/utils/userNoSelect'
import { hoverStyle } from 'src/styles/utils/hoverStyle'

export const ThemeToggleStyled = styled.div`
  margin-top: 0.5rem;
  align-items: center;
  ${userNoSelect()};
  padding: 0 25px;
  cursor: pointer;
`

export const ThemeToggleFlex = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 10px;
  transition: var(--transition);
  border-radius: var(--radius);

  ${hoverStyle()};
`

export const ThemeToggleIcon = styled.img`
  width: 25px;
  height: 25px;
`

export const ThemeToggleText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color};
`
