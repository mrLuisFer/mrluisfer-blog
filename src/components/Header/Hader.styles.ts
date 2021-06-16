import styled from 'styled-components'
import { paddingContainer } from '../../styles/utils/paddingContainer'
import { userNoSelect } from '../../styles/utils/userNoSelect'

export const HeaderStyled = styled.header`
  ${paddingContainer};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`

export const HeaderLogo = styled.img`
  ${userNoSelect};
  height: 30px;
`
