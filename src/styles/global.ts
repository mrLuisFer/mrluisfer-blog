import { createGlobalStyle } from 'styled-components'
import { Theme } from '../types/theme'
import { cssVariables } from './utils/cssVariables'

type BodyProps = {
  theme: Theme
}
export const GlobalStyles = createGlobalStyle`
:root {
  font-size: 16px;
  --body-font: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  --radius: 15px;

  /* Colors */
  --green: ${cssVariables.green};
  --purple: ${cssVariables.purple};
  --purple-light: ${cssVariables.purpleLight};
  --pink: ${cssVariables.pink};
  --yellow: ${cssVariables.yellow};
  --blue: ${cssVariables.blue};
  --dark-grey: ${cssVariables.darkGrey};
  --dark-side-left-bg: ${cssVariables.darkSideLeftBg};
  --grey: ${cssVariables.grey};
  --light-grey: ${cssVariables.lightGrey};
  --hover-light: ${cssVariables.hoverLight};
  --hover-dark: ${cssVariables.hoverDark};
  --date-color: ${cssVariables.dateColor};
  --date-dark-color: ${cssVariables.dateDarkColor};
  --shadow-color: ${cssVariables.shadowColor};
  --radius: ${cssVariables.radius};
  --transition: ${cssVariables.transition};
  --scrollbar-light: ${cssVariables.scrollbarLight};
  --scrollbar-dark: ${cssVariables.scrollbarDark};
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
  background: ${({ theme }: BodyProps) => theme.body};
  color: ${({ theme }: BodyProps) => theme.color}
}
`
