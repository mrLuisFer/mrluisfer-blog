import { css } from 'styled-components'

export const hoverStyle = () => css`
  padding: 15px 10px;
  &:hover {
    background-color: ${(props) => props.theme.hoverbg};
  }
`
