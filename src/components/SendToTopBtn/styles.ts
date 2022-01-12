import { cssVariables } from 'src/styles/utils/cssVariables'
import styled from 'styled-components'

type BtnStyledProps = {
  isScroll: boolean
}

export const BtnStyled = styled.button<BtnStyledProps>`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  right: 1rem;
  bottom: 10px;
  cursor: pointer;
  transition: ${cssVariables.transition};
  display: ${(props) => (props.isScroll ? 'block' : 'none')};
  background: ${cssVariables.darkGrey};

  &:hover {
    width: 2.2rem;
    height: 2.2rem;
  }
`
