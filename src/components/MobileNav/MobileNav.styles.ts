import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const MobileNavStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;

  @media (min-width: ${mediaQueries.md}) {
    display: none;
  }
`
