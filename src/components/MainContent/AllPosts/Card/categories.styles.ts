import { css } from 'styled-components'
import { CategoriesProps } from 'src/types/categories'

export const categories = (props: CategoriesProps) => {
  return css`
    ${props.category === 'javascript'
      ? css`
          background-color: var(--yellow);
          color: var(--dark-grey);
          font-weight: 500;
        `
      : ''};

    ${props.category === 'typescript'
      ? css`
          background-color: var(--blue);
          color: var(--grey);
        `
      : ''}
  `
}
