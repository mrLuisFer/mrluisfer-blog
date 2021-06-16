import { css, FlattenSimpleInterpolation } from 'styled-components'

export const userNoSelect = (): FlattenSimpleInterpolation => css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`
