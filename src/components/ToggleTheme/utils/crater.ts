import { css, FlattenSimpleInterpolation } from 'styled-components'

export const crater = (top = '', left = '', size = ''): FlattenSimpleInterpolation => css`
  content: '';
  position: absolute;
  top: ${top};
  left: ${left};
  width: ${size};
  height: ${size};
  background-color: #efeeda;
  border-radius: 100%;
  border: 4px solid #dee1c5;
`
