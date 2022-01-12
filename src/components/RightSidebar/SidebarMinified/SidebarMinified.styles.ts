import styled from 'styled-components'
import { rightSidebarMinimized } from 'src/layout/utils/sidebarWidth'

export const MinifiedIcon = styled.img`
  cursor: pointer;
  width: 3.5rem;
  display: block;
  opacity: 0;
  transition: all var(--transition);
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 0 var(--radius) var(--radius) 0;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
    background: ${(props) => props.theme.hoverbg};
  }
`

type Props = {
  completeSidebar: boolean
}
export const SidebarMinifiedStyled = styled.div<Props>`
  grid-area: right;
  width: ${rightSidebarMinimized}px;
  right: 0;
  min-height: 100vh;
  height: 100%;
  box-shadow: 1px 0 5px var(--shadow-color);
  position: fixed;
  /* background: ${(props) => props.theme.sidebar}; */
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: var(--transition);
  opacity: ${(props) => (props.completeSidebar ? 0 : 1)};

  &:hover {
    ${MinifiedIcon} {
      transition: var(--transition);
      opacity: 1;
    }
  }
`
