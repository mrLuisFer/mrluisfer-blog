import styled from 'styled-components'

import { categories } from './categories.styles'
import { CategoriesProps } from 'src/types/categories'
import { mediaQueries } from 'src/styles/mediaQueries'
import { userNoSelect } from 'src/styles/utils/userNoSelect'

export const CardTag = styled.p<CategoriesProps>`
  display: none;

  @media (min-width: ${mediaQueries.sm}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0.4rem;
    border-radius: 0 0 0 var(--radius);
    font-size: 0.7rem;
    font-weight: 500;
    ${(props) => categories(props)};
    ${userNoSelect()};
    opacity: 0;
    transition: opacity var(--transition);
  }
`

export const CardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.sidebar};
  padding: 0.5rem;
  border-radius: var(--radius);
  max-width: 890px;

  @media (min-width: ${mediaQueries.sm}) {
    &:hover {
      ${CardTag} {
        opacity: 1;
        transition: opacity var(--transition);
      }
    }
  }
`

export const CardIcon = styled.img``

export const CardContent = styled.div`
  padding: 0 0.8rem;

  @media (min-width: ${mediaQueries.sm}) {
    padding: 0.5rem 1rem;
  }
`

export const CardDateText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.dateColor};
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: var(--transition);

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: ${mediaQueries.md}) {
    margin-top: 0.4rem;
  }
`

export const CardTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: ${mediaQueries.sm}) {
    font-size: 1.5rem;
  }
`
