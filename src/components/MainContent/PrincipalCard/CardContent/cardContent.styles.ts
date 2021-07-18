import { mediaQueries } from 'src/styles/mediaQueries'
import { userNoSelect } from 'src/styles/utils/userNoSelect'
import styled from 'styled-components'

export const FlexContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: ${mediaQueries.md}) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

export const PrincipalCardText = styled.p`
  max-width: 370px;
  color: var(--grey);
  font-size: 0.9rem;
  margin: 1rem auto;
  font-weight: 500;
  opacity: 0.9;

  @media (min-width: ${mediaQueries.sm}) {
    line-height: 1.7;
    max-width: 400px;
  }

  @media (min-width: ${mediaQueries.md}) {
    text-align: left;
    margin: 1rem 0;
    font-size: 0.8rem;
  }

  @media (min-width: ${mediaQueries.lg}) {
    font-size: 0.9rem;
  }
`

export const PrincipalCardComputerImg = styled.img`
  width: 230px;
  cursor: pointer;
  margin: 0 auto;
  transition: var(--transition);
  margin-bottom: 1.3rem;

  ${userNoSelect()};

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: ${mediaQueries.sm}) {
    width: 280px;
  }

  @media (min-width: ${mediaQueries.md}) {
    width: 200px;
  }

  @media (min-width: ${mediaQueries.lg}) {
    width: 280px;
  }
`
