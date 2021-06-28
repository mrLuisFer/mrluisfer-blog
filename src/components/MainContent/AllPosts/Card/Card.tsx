import { useHistory } from 'react-router-dom'
import cardLinkArrow from 'src/assets/icons/card-arrow.svg'
import {
  CardStyled,
  CardImg,
  CardContent,
  CardDateText,
  CardTitle,
  CardLink,
  CardLinkContainer,
  CardLinkImg,
  CardTag,
} from './Card.styles'

type CardProps = {
  title: string
  id: number
  date: string
  tag: string
}

export default function Card({ title, id, date, tag }: CardProps) {
  const cardImgBanner =
    'https://i.picsum.photos/id/488/200/300.jpg?hmac=0juhK9GVPUpSjHaRjdjZO5Fw2bcfSYHNjXLYTg3ZsQU'

  const history = useHistory()

  const handleClickToPost = (id: number) => {
    history.push(`/blog/${id}`)
  }

  return (
    <CardStyled>
      <CardTag category={tag.toLocaleLowerCase()}>#{tag}</CardTag>
      <CardImg
        src={cardImgBanner}
        alt='A banner'
        aria-hidden='true'
        draggable='false'
        onClick={() => handleClickToPost(id)}
      />
      <CardContent>
        <CardDateText>{date}</CardDateText>
        <CardTitle aria-hidden='true' onClick={() => handleClickToPost(id)}>
          {title}
        </CardTitle>
        <CardLinkContainer>
          <CardLink to={`/blog/${id}`}>
            Saber más
            <CardLinkImg src={cardLinkArrow} alt='Arrow' title='Saber más' />
          </CardLink>
        </CardLinkContainer>
      </CardContent>
    </CardStyled>
  )
}
