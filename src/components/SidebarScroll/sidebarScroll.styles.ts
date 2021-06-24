import { mediaQueries } from 'src/styles/mediaQueries'
import styled from 'styled-components'

type Props = {
  gridArea: string
  left?: boolean
  right?: boolean
}

export const SidebarScrolledStyled = styled.div<Props>`
  min-height: 100vh;
  height: 100%;
  box-shadow: 1px 0 10px var(--shadow-color);
  position: fixed;
  top: 0;
  width: 260px;
  overflow-y: scroll;
  grid-area: ${(props) => props.gridArea};
  background: ${(props) => props.theme.sidebar};
  ${(props) => (props.left ? 'left: 0;' : '')};
  ${(props) => (props.right ? 'right: 0;' : '')};

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

  @media (min-width: ${mediaQueries.lg}) {
    width: 270px;
  }
`
