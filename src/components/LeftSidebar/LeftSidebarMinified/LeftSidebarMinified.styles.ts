import styled from 'styled-components'
import { leftSidebarMinimized } from 'src/Layout/utils/sidebarWidth'

export const LeftSidebarMinifiedStyled = styled.div`
  width: ${leftSidebarMinimized}px;
  background: ${(props) => props.theme.sidebar};
  padding: 1rem 0;
`
