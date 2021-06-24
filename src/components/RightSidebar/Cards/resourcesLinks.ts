import { TypeResources } from './Card/types'
import { themes } from './themes'

export const resourcesLinks: Array<TypeResources> = [
  {
    title: 'Videos en Youtube.com',
    url: 'https://www.youtube.com/results?search_query=frontend',
    theme: themes.purpleLight,
  },
  {
    title: 'Preguntas de StackOverflow',
    url: 'https://stackoverflow.com/questions',
    theme: themes.green,
  },
  {
    title: 'Libros Gratuitos',
    url: '/',
    theme: themes.yellow,
  },
  {
    title: 'Comunidades de Discord',
    url: '/',
    theme: themes.blue,
  },
]
