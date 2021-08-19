import { mediaQueries } from 'src/styles/mediaQueries'
import styled, { css } from 'styled-components'
import {
  leftSidebarComplete,
  leftSidebarMinimized,
  rightSidebarComplete,
  rightSidebarMinimized,
} from './utils/sidebarWidth'

type GridLayoutDesktopProps = {
  cols: string
  completeRightSide: boolean
  leftCompleteSidebar: boolean
}

export const GridLayoutDesktop = styled.div<GridLayoutDesktopProps>`
  display: grid;
  position: relative;

  ${(props) =>
    props.cols === '3-cols'
      ? css`
          grid-template-columns:
            ${
              props.leftCompleteSidebar ? `${leftSidebarComplete}px` : `${leftSidebarMinimized}px`
            } 1fr
            ${
              !props.completeRightSide ? `${rightSidebarMinimized}px` : `${rightSidebarComplete}px`
            };
          grid-template-areas: 'left center right';

          @media (min-width: ${mediaQueries.xl}) {
            grid-template-columns:
              ${
                props.leftCompleteSidebar
                  ? `calc(${leftSidebarComplete}px + 10px)`
                  : `${leftSidebarMinimized}px`
              }
              1fr
              ${
                !props.completeRightSide
                  ? `${rightSidebarMinimized}px`
                  : `${rightSidebarComplete}px`
              };};
          }

          @media (min-width: ${mediaQueries.xxl}) {
            grid-template-columns: ${
              props.leftCompleteSidebar
                ? `calc(${leftSidebarComplete}px + 15px)`
                : `${leftSidebarMinimized}px`
            } 1fr ${
          !props.completeRightSide ? `${rightSidebarMinimized}` : `${rightSidebarComplete}`
        };
          }
        `
      : css`
          grid-template-columns:
            ${props.leftCompleteSidebar ? `${leftSidebarComplete}px` : `${leftSidebarMinimized}px`}
            1fr;
          grid-template-areas: 'left center';
        `};
`
