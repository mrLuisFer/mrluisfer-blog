import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'
import { randomNumber } from 'src/utils/randomNumber'

const { val } = randomNumber({})

export const AllPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem 0;

  @media (min-width: ${mediaQueries.lg}) {
    flex-direction: row;
    gap: 2rem 3rem;
    flex-wrap: wrap;
  }

  div:nth-child(${val}) {
    margin: 0;
    /* width: 290px; */
    width: 400px;
  }
`
