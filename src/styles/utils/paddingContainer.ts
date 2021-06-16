import { css } from 'styled-components'
import { mediaQueries } from '../mediaQueries'

export const paddingContainer = () => css`
  padding: 20px 10px;

  @media (min-width: ${mediaQueries.mobile}) {
    padding: 20px;
  }
`
