import Head from 'src/components/common/Head/Head'
import BooksContent from 'src/components/BooksContent'

export default function BooksView() {
  return (
    <main>
      <Head
        title='Blog 📚 | Libros de Programacion Gratuitos'
        description='Lista de los mejores libros para aprender sobre programacion y de manera gratuita'
        keyWords='Libros Libros Gratis Programacion Desarrollo Frontend Backend'
      />
      <BooksContent />
    </main>
  )
}
