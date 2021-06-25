import { TypeResources } from './Card/types'
import { themes } from './themes'

export const resourcesLinks: Array<TypeResources> = [
  {
    title: 'Videos en Youtube.com',
    url: 'https://www.youtube.com/results?search_query=frontend',
    theme: themes.purpleLight,
    external: true,
  },
  {
    title: 'Preguntas de StackOverflow',
    url: 'https://stackoverflow.com/questions',
    theme: themes.green,
    external: true,
  },
  {
    title: 'Libros Gratuitos',
    url: '/books',
    theme: themes.yellow,
  },
  {
    title: 'Comunidades de Discord',
    url: '/discord',
    theme: themes.blue,
  },
]
