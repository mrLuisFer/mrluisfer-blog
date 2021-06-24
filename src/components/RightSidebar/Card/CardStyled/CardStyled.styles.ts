import styled, { css } from 'styled-components'
import { themes } from '../themes'

type ThemeProps = {
  theme: string
}

export const CardStyled = styled.div<ThemeProps>`
  margin: 0 auto;
  margin-bottom: 2.5rem;
  box-shadow: 1px 2px 4px var(--shadow-color);
  padding: 10px 20px;
  border-radius: var(--radius);

  ${(props) =>
    props.theme === themes.purple
      ? css`
          background-color: var(--purple);
          color: var(--light-grey);
        `
      : ''};

  ${(props) =>
    props.theme === themes.green
      ? css`
          background-color: var(--green);
          color: var(--dark-grey);

          img {
            filter: brightness(0.1);
          }
        `
      : ''};

  ${(props) =>
    props.theme === themes.yellow
      ? css`
          background-color: var(--yellow);
          color: var(--dark-grey);

          img {
            filter: brightness(0.1);
          }
        `
      : ''};

  ${(props) =>
    props.theme === themes.blue
      ? css`
          background-color: var(--blue);
          color: var(--light-grey);
        `
      : ''};
`
