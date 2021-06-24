import { TypeResources } from './cardProps'
import CardLink from './CardLink/CardLink'
import { CardTitle } from './card.styles'
import { CardStyled } from './CardStyled/CardStyled.styles'

export default function Card({ title, theme, url }: TypeResources) {
  return (
    <CardStyled theme={theme}>
      <CardTitle>{title}</CardTitle>
      <CardLink url={url} theme={theme} />
    </CardStyled>
  )
}
