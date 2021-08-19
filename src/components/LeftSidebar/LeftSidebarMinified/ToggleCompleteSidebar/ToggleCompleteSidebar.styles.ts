import styled from 'styled-components'
import { cssVariables } from 'src/styles/utils/cssVariables'

export const ToggleIcon = styled.img`
  transform: rotate(180deg);
  display: block;
  margin: 0 auto 1rem;
  width: 4rem;
  cursor: pointer;
  border-radius: ${cssVariables.radius};
  padding: 15px;

  &:hover {
    background-color: ${(props) => props.theme.hoverbg};
  }
`
