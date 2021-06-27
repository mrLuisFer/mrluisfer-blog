import { useParams } from 'react-router-dom'
import { POSTS } from 'src/posts/posts'

function find(id: number) {
  return POSTS.find((post) => post.id === id)
}

type TUseParams = {
  id: string
}
export default function Post() {
  const { id } = useParams<TUseParams>()
  const idParsed = parseInt(id)

  const singlePost = find(idParsed)

  console.log(singlePost)

  if (singlePost === undefined) console.log('Redirigiendo hacia home')
  return <div>{id}</div>
}
