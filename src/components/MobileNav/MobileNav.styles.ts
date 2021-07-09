import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const MobileNavStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.2rem;
  padding-top: 1.2rem;
  align-items: center;

  @media (min-width: ${mediaQueries.md}) {
    display: none;
  }
`

export const MobileNavTitle = styled.h1`
  margin: 0;
  font-size: 1.8rem;

  span {
    color: var(--blue);
  }
`
