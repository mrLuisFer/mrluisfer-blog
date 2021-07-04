import { css } from 'styled-components'
import { themes } from '../../themes'
import { ThemeProps } from '../types'

export const cardThemes = (props: ThemeProps) => {
  return css`
    ${props.theme === themes.purple &&
    css`
      background-color: var(--purple);
      color: var(--light-grey);
    `};

    ${props.theme === themes.green &&
    css`
      background-color: var(--green);
      color: var(--dark-grey);

      img {
        filter: brightness(0.1);
      }
    `};

    ${props.theme === themes.yellow &&
    css`
      background-color: var(--yellow);
      color: var(--dark-grey);

      img {
        filter: brightness(0.1);
      }
    `};

    ${props.theme === themes.blue &&
    css`
      background-color: var(--blue);
      color: var(--light-grey);
    `};

    ${props.theme === themes.purpleLight &&
    css`
      background-color: var(--purple-light);
      color: var(--light-grey);
    `};
  `
}
