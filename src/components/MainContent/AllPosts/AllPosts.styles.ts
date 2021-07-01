import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const AllPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem 0;

  @media (min-width: ${mediaQueries.lg}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 290px));
    gap: 2rem 4rem;
  }
`
