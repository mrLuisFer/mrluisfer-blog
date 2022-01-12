import { POSTS } from 'src/blog/posts'
import { PostStyled } from './Post.styles'
import { urls } from 'src/Routes/routeUrls'
import { useParams, Redirect } from 'react-router-dom'
import Head from 'src/components/common/Head/Head'
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

  return (
    <div>
      {singlePost === undefined ? (
        <Redirect to={urls.rootUrl} />
      ) : (
        <PostStyled>
          <Head
            title={`Blog 📝 | ${singlePost.title}`}
            keyWords='Javascript, Typescript, React, Blog, Dev.to, CSS, HTML'
            description={singlePost.description}
          />
          <PostHeader title={singlePost.title} />
        </PostStyled>
      )}
    </div>
  )
}
