import styled from 'styled-components'
import { ThemeProps } from '../types'

export const CardFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 0.5rem;
  align-items: center;
  margin-top: 0.5rem;
`

export const CardLinkIcon = styled.img`
  display: block;
  transition: var(--transition);
`

export const CardLinkStyled = styled.p<ThemeProps>`
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }

  &:hover + ${CardLinkIcon} {
    transform: scale(1.2);
    transition: var(--transition);
  }
`
