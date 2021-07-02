import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { cssVariables } from 'src/styles/utils/cssVariables'
import BookCard from './BookCard/BookCard'

export default function BooksContent() {
  return (
    <div>
      <HeaderTitle
        titleText='Lista de Libros Gratuitos para aprender a Programar!'
        lineColor={cssVariables.yellow}
      />
      <p>
        Tambien te recomiendo estos recursos que puedes revisar ademas de los libros que te muestro
        aqui para que puedas aprender y conocer mucho mas! :D
      </p>
      <BookCard />
    </div>
  )
}
