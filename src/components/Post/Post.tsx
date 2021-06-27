import { useParams, Redirect } from 'react-router-dom'
import { POSTS } from 'src/blog/posts'
import Markdown from 'src/components/Markdown/Markdown'

function find(id: number) {
  return POSTS.find((post) => post.id === id)
}

type TUseParams = {
  id: string
}
export default function Post() {
  const { id } = useParams<TUseParams>()
  const idParsed: number = +id

  const singlePost = find(idParsed)

  console.log(singlePost)

  return (
    <>
      {singlePost === undefined ? (
        <Redirect to='/' />
      ) : (
        <div>
          <Markdown>{singlePost.content}</Markdown>
        </div>
      )}
    </>
  )
}
