import styled from 'styled-components'

type LineSeparateProps = {
  lineMargin?: string
}

export const LineSeparate = styled.div<LineSeparateProps>`
  background-color: ${(props) => props.theme.lineSeparate};
  height: 5px;
  width: 100%;
  margin: ${(props) => props.lineMargin || '0'};
`
