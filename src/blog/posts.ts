import { TPosts } from 'src/types/posts'
import { prueba } from './articles/prueba'

export const POSTS: Array<TPosts> = [
  {
    id: 0,
    title: 'Prueba',
    tag: 'Javascript',
    content: prueba,
    date: '27 Junio 2021',
    description: 'Una primera descripcion pequeña',
  },
  {
    id: 1,
    title: 'Prueba 2',
    tag: 'TypeScript',
    content: prueba,
    date: '20 Junio 2020',
    description: 'Una segunda descripcion pequeña',
  },
]
