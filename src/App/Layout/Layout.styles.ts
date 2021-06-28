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
          grid-template-columns: 260px 1fr 270px;
          grid-template-areas: 'left center right';

          @media (min-width: ${mediaQueries.xl}) {
            grid-template-columns: 270px 1fr 270px;
          }

          @media (min-width: ${mediaQueries.xxl}) {
            grid-template-columns: 285px 1fr 285px;
          }
        `
      : css`
          grid-template-columns: 260px 1fr;
          grid-template-areas: 'left center';
        `};
`
