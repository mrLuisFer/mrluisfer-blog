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

export const CardIcon = styled.img`
  margin: auto 0;
  height: 2.8rem;
  width: 2.8rem;
  transition: var(--transition);
  cursor: pointer;
`

export const CardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: relative;
  border-radius: var(--radius);
  max-width: 890px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: rgba(138, 138, 138, 0.2);

    ${CardIcon} {
      transform: scale(1.1);
      transition: var(--transition);
    }

    @media (min-width: ${mediaQueries.sm}) {
      ${CardTag} {
        opacity: 1;
        transition: opacity var(--transition);
      }
    }
  }
`

export const CardContent = styled.div`
  padding-left: 1rem;
`

export const CardDateText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.dateColor};
  font-weight: 600;
  text-transform: capitalize;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: var(--transition);

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: ${mediaQueries.md}) {
    margin-top: 0.2rem;
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
