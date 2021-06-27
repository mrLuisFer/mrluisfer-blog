import Main from 'src/views/Main'
import About from 'src/views/About'
import BooksView from 'src/views/BooksView'
import DiscordCommunities from 'src/views/DiscordCommunities'
import Post from 'src/components/Post/Post'

import { urls } from './routeUrls'
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
    url: urls.rootUrl,
    exact: true,
    component: <Main />,
  },
  {
    routeName: 'about',
    url: urls.aboutUrl,
    component: <About />,
  },
  {
    routeName: 'Books',
    url: urls.booksUrl,
    component: <BooksView />,
  },
  {
    routeName: 'Discord',
    url: urls.discordUrl,
    component: <DiscordCommunities />,
  },
  {
    routeName: 'Posts',
    url: urls.postUrl,
    component: <Post />,
  },
]
