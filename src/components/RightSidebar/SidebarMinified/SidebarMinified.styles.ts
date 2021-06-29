import styled from 'styled-components'

export const SidebarMinifiedStyled = styled.div`
  grid-area: right;
  width: 100px;
  right: 0;
  min-height: 100vh;
  height: 100%;
  box-shadow: 1px 0 10px var(--shadow-color);
  position: fixed;
  background: ${(props) => props.theme.sidebar};
`
