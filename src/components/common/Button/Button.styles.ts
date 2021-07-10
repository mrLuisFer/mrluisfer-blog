import styled from 'styled-components'
import { noTapHightlight } from 'src/styles/utils/noTapHightlight'
import { cssVariables } from 'src/styles/utils/cssVariables'

type ButtonProps = {
  buttonWidth: string
  background?: string
  color?: string
}
export const Button = styled.button<ButtonProps>`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  width: ${(props) => props.buttonWidth};
  font-size: 1.1rem;
  background: ${(props) => props.background || `${cssVariables.blue}`};
  color: ${(props) => props.color || `${cssVariables.lightGrey}`};
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 1px 2px 4px var(--shadow-color);
  transition: var(--transition);
  ${noTapHightlight()};

  &:hover {
    box-shadow: 2px 3px 5px var(--shadow-color);
    transform: scale(1.01);
  }

  &:active {
    opacity: 0.8;
  }
`
