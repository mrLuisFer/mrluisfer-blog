import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const TryAgainBtnStyled = styled.button`
  margin: 1rem auto;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  border: none;
  font-size: 1em;
  background: var(--blue);
  color: var(--grey);
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;

  &:active {
    transform: scale(0.96, 0.96);
  }

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }

  @media (min-width: ${mediaQueries.md}) {
    width: 10em;
    height: 3rem;
    font-size: 1.2rem;
  }
`
