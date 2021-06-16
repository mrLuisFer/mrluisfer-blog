import { css, FlattenSimpleInterpolation } from 'styled-components'
import { noTapHightlight } from './noTapHightlight'

export const userNoSelect = (): FlattenSimpleInterpolation => css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${noTapHightlight()}
`
