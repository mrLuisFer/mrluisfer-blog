import { css } from 'styled-components'
import { CategoriesProps } from 'src/types/categories'

export const categories = (props: CategoriesProps) => {
  const category = props.category.toLowerCase()

  return css`
    ${category === 'javascript' &&
    css`
      background-color: var(--yellow);
      color: var(--dark-grey);
      font-weight: 500;
    `};

    ${category === 'typescript' &&
    css`
      background-color: var(--blue);
      color: var(--grey);
    `}

    ${category === 'css' &&
    css`
      background-color: var(--purple);
      color: var(--grey);
    `}
  `
}
