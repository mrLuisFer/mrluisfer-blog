import styled from 'styled-components'
import { ThemeProps } from '../types'
import { textTheme } from './textTheme'

export const CardFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 0.5rem;
`

export const CardLinkIcon = styled.img`
  display: inline-block;
`

export const CardLinkStyled = styled.a<ThemeProps>`
  font-size: 0.9rem;
  text-decoration: none;

  ${(props) => textTheme(props)};
`
