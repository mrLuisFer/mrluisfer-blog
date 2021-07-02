import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const PostHeaderStyled = styled.div`
  display: flex;
  column-gap: 1em;
  align-items: center;
`

export const GoBackIconStyled = styled.div`
  border-radius: var(--radius);
  cursor: pointer;
  padding: 0.7rem 1rem;

  &:hover {
    background-color: ${(props) => props.theme.hoverbg};
  }

  img {
    display: block;
    margin: auto;
    width: 0.9rem;
    height: 1.2rem;

    @media (min-width: ${mediaQueries.md}) {
      width: 1rem;
      height: 1.6rem;
    }
  }
`

export const GoBackTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.1px;
  font-size: 1.5rem;

  @media (min-width: ${mediaQueries.sm}) {
    font-size: 2rem;
  }
`
