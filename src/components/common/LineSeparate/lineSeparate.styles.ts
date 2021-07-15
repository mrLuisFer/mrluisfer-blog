import { cssVariables } from 'src/styles/utils/cssVariables'
import styled from 'styled-components'

type LineSeparateProps = {
  lineMargin?: string
  bgColor?: string
  opacity?: number
  withRadius?: boolean
}

export const LineSeparate = styled.div<LineSeparateProps>`
  background-color: ${(props) => props.bgColor || props.theme.lineSeparate};
  height: 5px;
  width: 100%;
  margin: ${(props) => props.lineMargin || '0'};
  opacity: ${(props) => props.opacity || 1};
  border-radius: ${(props) => (props.withRadius ? cssVariables.radius : 'none')};
`
