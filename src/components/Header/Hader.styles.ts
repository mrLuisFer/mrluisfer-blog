import styled from 'styled-components'
import { paddingContainer } from '../../styles/utils/paddingContainer'

export const HeaderStyled = styled.header`
  ${paddingContainer};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
`
