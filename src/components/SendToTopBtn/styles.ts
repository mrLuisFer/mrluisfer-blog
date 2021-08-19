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
  border: 0.3px solid ${cssVariables.darkGrey};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  right: 1rem;
  bottom: 10px;
  cursor: pointer;
  transition: ${cssVariables.transition};
  display: ${(props) => (props.isScroll ? 'block' : 'none')};

  &:hover {
    width: 2.2rem;
    height: 2.2rem;
  }
`
