import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const LeftSidebarTitle = styled.h1`
  display: inline-block;
  padding-left: 35px;
  padding-top: 20px;
  margin: 0;
  color: ${(props) => props.theme.color};

  @media (min-width: ${mediaQueries.lg}) {
    padding-left: 30px;
  }

  span {
    color: var(--blue);
  }
`
