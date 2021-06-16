import { css, FlattenSimpleInterpolation } from 'styled-components'
import { mediaQueries } from '../mediaQueries'

export const paddingContainer = (): FlattenSimpleInterpolation => css`
  padding: 20px 10px;

  @media (min-width: ${mediaQueries.mobile}) {
    padding: 20px;
  }
`
