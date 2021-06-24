import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  @media (min-width: ${mediaQueries.md}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: ${mediaQueries.lg}) {
    align-items: flex-start;
  }
`

export const PrincipalCardTitle = styled.h2`
  color: var(--light-grey);
  font-size: 1rem;
  max-width: 430px;
  margin: 0 auto;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${mediaQueries.md}) {
    margin: 0;
    text-align: left;
    max-width: 380px;
  }

  @media (min-width: ${mediaQueries.lg}) {
    font-size: 1.3rem;
    max-width: 420px;
  }
`

export const PrincipalCardIcon = styled.img`
  width: 1.2em;
  height: 1.2em;
  cursor: pointer;
  margin-bottom: 0.8rem;
  margin-left: auto;

  @media (min-width: ${mediaQueries.md}) {
    margin: 0;
  }
`
