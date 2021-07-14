import styled from 'styled-components'

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

  &:active {
    transform: scale(0.96, 0.96);
  }
`
