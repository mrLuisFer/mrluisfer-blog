import { useHistory } from 'react-router-dom'
// import cardLinkArrow from 'src/assets/icons/card-arrow.svg'
import {
  CardStyled,
  CardIcon,
  CardContent,
  CardDateText,
  CardTitle,
  // CardLink,
  // CardLinkContainer,
  // CardLinkImg,
  CardTag,
} from './Card.styles'

type CardProps = {
  title: string
  id: number
  date: string
  tag: string
}

export default function Card({ title, id, date, tag }: CardProps) {
  const history = useHistory()

  const handleClickToPost = (id: number) => {
    history.push(`/blog/${id}`)
  }

  return (
    <CardStyled>
      <CardTag category={tag.toLocaleLowerCase()}>#{tag}</CardTag>
      <CardIcon
        alt='A banner'
        aria-hidden='true'
        draggable='false'
        onClick={() => handleClickToPost(id)}
      />
      <CardContent>
        <CardTitle aria-hidden='true' onClick={() => handleClickToPost(id)}>
          {title}
        </CardTitle>
        <CardDateText>{date}</CardDateText>
      </CardContent>
    </CardStyled>
  )
}
