import styled from 'styled-components'
import { ThemeProps } from '../types'
import { cardThemes } from './cardThemes'

export const CardStyled = styled.div<ThemeProps>`
  margin: 0 auto;
  margin-bottom: 2.5rem;
  box-shadow: 1px 2px 4px var(--shadow-color);
  padding: 10px 20px;
  border-radius: var(--radius);
  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
  }

  ${(props) => cardThemes(props)}
`
