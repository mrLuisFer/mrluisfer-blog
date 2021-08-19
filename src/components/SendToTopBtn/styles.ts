import { cssVariables } from 'src/styles/utils/cssVariables'
import styled from 'styled-components'

export const BtnStyled = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${cssVariables.darkGrey};
`
