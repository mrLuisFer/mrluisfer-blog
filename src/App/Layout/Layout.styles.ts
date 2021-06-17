import styled from 'styled-components'

type GridLayoutDesktopProps = {
  cols: string
}

export const GridLayoutDesktop = styled.div<GridLayoutDesktopProps>`
  display: grid;

  ${(props) =>
    props.cols === '3-cols'
      ? 'grid-template-columns: 260px 1fr 290px;'
      : 'grid-template-columns: 260px 1fr;'}
`
