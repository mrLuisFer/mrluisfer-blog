import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  font-size: 16px;
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: var(--body-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  background: ${(props: any) => props.theme.body};
}
`
