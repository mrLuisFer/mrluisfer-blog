import styled from 'styled-components'

type Props = {
  completeSidebar: boolean
}
export const SidebarMinifiedStyled = styled.div<Props>`
  grid-area: right;
  width: 70px;
  right: 0;
  min-height: 100vh;
  height: 100%;
  box-shadow: 1px 0 10px var(--shadow-color);
  position: fixed;
  background: ${(props) => props.theme.sidebar};
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: var(--transition);
  opacity: ${(props) => (props.completeSidebar ? 0 : 1)};
`

export const MinifiedIcon = styled.img`
  cursor: pointer;
  width: 3rem;
  margin: auto;
  display: block;
`
