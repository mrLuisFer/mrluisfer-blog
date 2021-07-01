import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { categories } from './categories.styles'
import { CategoriesProps } from 'src/types/categories'
import { mediaQueries } from 'src/styles/mediaQueries'
import { userNoSelect } from 'src/styles/utils/userNoSelect'

export const CardStyled = styled.div`
  width: 270px;
  height: 320px;
  background: ${(props) => props.theme.bgCard};
  position: relative;
  border-radius: var(--radius);
  margin: 0 auto;
  box-shadow: 0.5px 0.5px 3px var(--shadow-color);
  transition: box-shadow var(--transition);
  transition: transform 0.5s ease;

  &:hover {
    box-shadow: 0.5px 0.5px 7px var(--shadow-color);
    transform: scale(1.01);
  }

  @media (min-width: ${mediaQueries.mb}) {
    width: 300px;
  }

  @media (min-width: ${mediaQueries.sm}) {
    width: 430px;
  }

  @media (min-width: ${mediaQueries.md}) {
    height: 340px;
    margin: 0;
  }

  @media (min-width: ${mediaQueries.lg}) {
    width: 320px;
  }
`

export const CardImg = styled.img`
  width: 100%;
  height: 175px;
  image-rendering: optimizeSpeed;
  object-fit: cover;
  -o-object-fit: cover;
  transition: all var(--transition);
  border-radius: var(--radius) var(--radius) 0 0;
  cursor: pointer;
`

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
  margin-top: 0.4rem;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: var(--transition);

  &:hover {
    opacity: 0.85;
  }
`

export const CardTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`

export const CardLinkImg = styled.img`
  margin-left: 0.5rem;
  transition: var(--transition);
`

export const CardLink = styled(Link)`
  text-decoration: none;
  color: var(--blue);
  transition: var(--transition);
  font-weight: 400;

  &:hover {
    text-decoration: underline;

    ${CardLinkImg} {
      transform: scale(1.1);
    }
  }
`

export const CardLinkContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${mediaQueries.md}) {
    margin-top: 2.5rem;
  }
`

export const CardTag = styled.p<CategoriesProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0.4rem;
  border-radius: var(--radius) 0 0 0;
  font-size: 0.9rem;
  font-weight: 500;
  ${userNoSelect()}

  ${(props) => categories(props)};
`
