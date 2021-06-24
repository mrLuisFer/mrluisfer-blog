import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const PrincipalCardStyled = styled.div`
  background: var(--purple);
  border-radius: var(--radius);
  padding: 1.2rem 0.9rem;
  max-width: 680px;
  margin: 1rem auto;
  text-align: center;
  position: relative;
  color: var(--grey);

  @media (min-width: ${mediaQueries.sm}) {
    padding: 1.2rem 1.6rem;
  }

  @media (min-width: ${mediaQueries.md}) {
    padding: 1.2rem;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: ${mediaQueries.lg}) {
    max-width: 700px;
  }

  @media (min-width: ${mediaQueries.xl}) {
    max-width: 90%;
  }
`
