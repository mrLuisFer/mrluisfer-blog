import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { categories } from './categories.styles'
import { CategoriesProps } from 'src/types/categories'

export const CardStyled = styled.div`
  width: 270px;
  height: 320px;
  background: ${(props) => props.theme.bgCard};
  position: relative;
  border-radius: var(--radius);
  box-shadow: 0.5px 0.5px 7px var(--shadow-color);
`

export const CardImg = styled.img`
  width: 100%;
  height: 175px;
  image-rendering: optimizeSpeed;
  object-fit: cover;
  -o-object-fit: cover;
  transition: all var(--transition);
  border-radius: var(--radius) var(--radius) 0 0;
`

export const CardContent = styled.div`
  padding: 0 0.8rem;
`

export const CardDateText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.dateColor};
  font-weight: 600;
  text-transform: capitalize;
  opacity: 0.8;
  margin-top: 0.4rem;
  font-size: 0.9rem;
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

  &:hover {
    text-decoration: underline;

    ${CardLinkImg} {
      transform: scale(1.2);
    }
  }
`

export const CardLinkContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

export const CardTag = styled.p<CategoriesProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0.4rem;
  border-radius: var(--radius) 0 0 0;
  font-size: 0.9rem;

  ${(props) => categories(props)};
`
