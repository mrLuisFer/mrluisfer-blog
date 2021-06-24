import styled, { css } from 'styled-components'
import { themes } from '../themes'

export const CardFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 0.5rem;
`

export const CardLinkIcon = styled.img`
  display: inline-block;
`

type ThemeProps = {
  theme: string
}

export const CardLinkStyled = styled.a<ThemeProps>`
  font-size: 0.9rem;
  text-decoration: none;

  ${(props) =>
    props.theme === themes.purple
      ? css`
          color: var(--light-grey);
        `
      : ''};

  ${(props) =>
    props.theme === themes.green
      ? css`
          color: var(--dark-grey);
        `
      : ''};

  ${(props) =>
    props.theme === themes.yellow
      ? css`
          color: var(--dark-grey);
        `
      : ''};

  ${(props) =>
    props.theme === themes.blue
      ? css`
          color: var(--light-grey);
        `
      : ''};
`
