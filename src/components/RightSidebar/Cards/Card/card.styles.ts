import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
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

const cardCommonLink = css`
  text-decoration: none;
  ${(props: ThemeProps) => textTheme(props)};
`

export const CardAnchor = styled.a<ThemeProps>`
  ${cardCommonLink}
`

export const CardLocalLink = styled(Link)`
  ${cardCommonLink}
`
