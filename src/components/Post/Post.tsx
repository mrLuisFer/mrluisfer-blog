import { useParams, Redirect } from 'react-router-dom'
import { POSTS } from 'src/blog/posts'
import Head from '../Head/Head'
import Markdown from '../Markdown/Markdown'
import PostHeader from './PostHeader/PostHeader'

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
          <Head
            title={`Blog | ${singlePost.title}`}
            keyWords='Javascript, Typescript, React, Blog, Dev.to, CSS, HTML'
            description={singlePost.description}
          />
          <PostHeader title={singlePost.title} />
          <Markdown>{singlePost.content}</Markdown>
        </div>
      )}
    </>
  )
}
