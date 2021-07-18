import { css } from 'styled-components'
import { ThemeProps } from '../types'
import { themes } from '../../themes'

export const textTheme = (props: any | ThemeProps) => {
  return css`
    ${props.theme === themes.purple &&
    css`
      color: var(--light-grey);
    `};

    ${props.theme === themes.green &&
    css`
      color: var(--dark-grey);
    `};

    ${props.theme === themes.yellow &&
    css`
      color: var(--dark-grey);
    `};

    ${props.theme === themes.blue &&
    css`
      color: var(--light-grey);
    `};

    ${props.theme === themes.purpleLight &&
    css`
      color: var(--light-grey);
    `};
  `
}
