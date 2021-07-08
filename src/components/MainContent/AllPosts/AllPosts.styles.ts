import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const AllPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem 0;

  @media (min-width: ${mediaQueries.lg}) {
    gap: 2rem;
    width: 100%;
  }

  @media (min-width: ${mediaQueries.xl}) {
    gap: 2.2rem 2.8rem;
  }
`
