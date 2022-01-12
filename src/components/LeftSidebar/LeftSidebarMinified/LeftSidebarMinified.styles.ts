import styled from 'styled-components'
import { leftSidebarMinimized } from 'src/layout/utils/sidebarWidth'

export const LeftSidebarMinifiedStyled = styled.div`
  width: ${leftSidebarMinimized}px;
  background: ${(props) => props.theme.sidebar};
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
`
