import { cardThemes } from './cardThemes'
import { ThemeProps } from '../types'
import styled from 'styled-components'

export const CardStyled = styled.div<ThemeProps>`
  margin: 0 auto;
  margin-bottom: 2.5rem;
  box-shadow: 1px 2px 4px var(--shadow-color);
  padding: 10px 20px;
  border-radius: var(--radius);
  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 3px 5px var(--shadow-color);
  }

  ${(props) => cardThemes(props)}
`
