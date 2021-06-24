import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const CardTechsStyled = styled.div`
  @media (min-width: ${mediaQueries.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const TechsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  justify-content: center;

  @media (min-width: ${mediaQueries.md}) {
    column-gap: 0.7rem;
  }

  @media (min-width: ${mediaQueries.lg}) {
    column-gap: 1rem;
  }
`

export const TechTitle = styled.p`
  display: none;
  @media (min-width: ${mediaQueries.md}) {
    display: inline-block;
    text-align: center;
    font-size: 0.7rem;
    font-weight: 300;
  }

  @media (min-width: ${mediaQueries.lg}) {
    font-size: 1rem;
  }
`

export const TechNames = styled.p`
  margin: 0;
  font-weight: 300;

  @media (min-width: ${mediaQueries.md}) {
    font-size: 0.7rem;
  }

  @media (min-width: ${mediaQueries.lg}) {
    font-size: 1rem;
  }

  &:hover {
    font-weight: 400;
  }
`
