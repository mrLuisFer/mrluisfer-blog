import { nanoid } from 'nanoid'
import { TBook } from 'src/types/book'

export const costBooks: Array<TBook> = [
  {
    bookName: 'Building Front-End Web Apps with Plain JavaScript',
    id: nanoid(),
    authorName: 'Gerd Wagner',
    description:
      'Este libro ha sido escrito por Gerd Wagner y te lo recomiendo porque viene con 6 aplicaciones de ejemplo escritas en Javascript con más de 8 mil líneas de código.',
  },
]
