import { useHistory } from 'react-router-dom'
import { useGetIconByTag } from 'src/hooks/useGetIconByTag'
import { CardStyled, CardIcon, CardContent, CardDateText, CardTitle, CardTag } from './Card.styles'

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

  const { icon, iconName } = useGetIconByTag(tag)

  return (
    <CardStyled onClick={() => handleClickToPost(id)} aria-hidden='true'>
      <CardTag category={tag.toLocaleLowerCase()}>#{tag}</CardTag>
      <CardIcon
        src={icon}
        alt={`#${iconName}`}
        title={`#${iconName} - ${title}`}
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
