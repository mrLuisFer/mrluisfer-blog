import { userNoSelect } from 'src/styles/utils/userNoSelect'
import styled from 'styled-components'

export const FooterStyled = styled.div`
  padding-left: 35px;
  display: flex;
  column-gap: 5px;
  ${userNoSelect()};
`

export const FooterText = styled.p`
  color: ${(props) => props.theme.color};

  span {
    color: var(--blue);
    font-weight: 700;
  }
`
