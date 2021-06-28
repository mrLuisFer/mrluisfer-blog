import { POSTS } from 'src/blog/posts'
import { AllPostsContainer } from './AllPosts.styles'
import Card from './Card/Card'

export default function AllPosts() {
  return (
    <AllPostsContainer>
      {POSTS.map(({ title, id, date, tag }) => (
        <Card title={title} id={id} date={date} tag={tag} key={id} />
      ))}
    </AllPostsContainer>
  )
}
