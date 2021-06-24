import { mediaQueries } from 'src/styles/mediaQueries'
import styled, { css } from 'styled-components'

type GridLayoutDesktopProps = {
  cols: string
}

export const GridLayoutDesktop = styled.div<GridLayoutDesktopProps>`
  display: grid;
  position: relative;

  ${(props) =>
    props.cols === '3-cols'
      ? css`
          grid-template-columns: 260px 1fr 290px;
          grid-template-areas: 'left center right';

          @media (min-width: ${mediaQueries.lg}) {
            grid-template-columns: 270px 1fr 270px;
          }
        `
      : css`
          grid-template-columns: 260px 1fr;
          grid-template-areas: 'left center';
        `};
`
