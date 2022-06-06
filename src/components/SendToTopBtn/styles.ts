import { cssVariables } from 'src/styles/utils/cssVariables'
import styled from 'styled-components'

type BtnStyledProps = {
  isScroll: boolean
}

export const BtnStyled = styled.button<BtnStyledProps>`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: none;
  right: 1rem;
  bottom: 10px;
  cursor: pointer;
  transition: ${cssVariables.transition};
  display: ${(props) => (props.isScroll ? 'block' : 'none')};
  background: none;

  &:hover {
    color: ${cssVariables.blue};
  }
`
