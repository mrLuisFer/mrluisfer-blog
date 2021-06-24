import { TypeResources } from './types'
import CardLink from './CardLink/CardLink'
import { CardStyled } from './CardStyled/CardStyled.styles'
import { CardTitle, CardAnchor } from './card.styles'

export default function Card({ title, theme, url }: TypeResources) {
  return (
    <CardStyled theme={theme}>
      <CardAnchor href={url} theme={theme}>
        <CardTitle>{title}</CardTitle>
        <CardLink url={url} theme={theme} />
      </CardAnchor>
    </CardStyled>
  )
}
