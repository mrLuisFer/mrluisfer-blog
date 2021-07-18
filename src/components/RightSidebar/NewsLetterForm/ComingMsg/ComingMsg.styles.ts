import { userNoSelect } from 'src/styles/utils/userNoSelect'
import styled from 'styled-components'

export const ComingMsgStyled = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  padding: 0.8rem;
  border-radius: var(--radius);
  background: ${(props) => props.theme.comingMsgBg};
  color: ${(props) => props.theme.comingMsgTxt};
  z-index: 10;
  box-shadow: 1px 2px 4px var(--shadow-color);

  ${userNoSelect()};
`

export const ComingMsgTxt = styled.p`
  margin: 0;
  cursor: text;
`
