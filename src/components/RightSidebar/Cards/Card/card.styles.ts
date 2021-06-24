import styled from 'styled-components'
import { ThemeProps } from './types'
import { textTheme } from './CardLink/textTheme'

export const CardsContainer = styled.div`
  padding: 10px 25px;
`

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 600;
  opacity: 0.95;

  &:hover {
    opacity: 1;
    text-decoration-line: underline;
    -moz-text-decoration-line: underline;
  }
`

export const CardAnchor = styled.a<ThemeProps>`
  text-decoration: none;
  ${(props) => textTheme(props)};
`
