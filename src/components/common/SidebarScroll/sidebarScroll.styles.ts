import { mediaQueries } from 'src/styles/mediaQueries'
import styled from 'styled-components'

type Props = {
  gridArea: string
  left?: boolean
  right?: boolean
  sidebarWidth: number
}
export const SidebarScrolledStyled = styled.div<Props>`
  min-height: 100vh;
  height: 100%;
  box-shadow: 1px 0 10px var(--shadow-color);
  position: fixed;
  top: 0;
  grid-area: ${(props) => props.gridArea};
  background: ${(props) => props.theme.sidebar};
  ${(props) => props.left && 'left: 0;'};
  ${(props) => props.right && 'right: 0;'};
  width: ${(props) => `${props.sidebarWidth}px`};
  transition: var(--transition);
  overflow-y: scroll;

  @media (min-width: ${mediaQueries.xl}) {
    width: 270px;
  }

  @media (min-width: ${mediaQueries.xxl}) {
    width: 285px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: var(--radius);
    background: ${(props) => props.theme.scrollbar};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #767676;
  }
`
