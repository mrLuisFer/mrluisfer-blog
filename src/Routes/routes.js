import Main from 'src/views/Main'
import About from 'src/views/About'

/**
 * @typedef TRoute
 * @param {string} routeName
 * @param {string} url
 * @param {boolean} exact?
 * @param {JSX.Element} component
 */
export const routes = [
  {
    routeName: 'root',
    url: '/',
    exact: true,
    component: <Main />,
  },
  {
    routeName: 'about',
    url: '/about',
    component: <About />,
  },
]
