import { CardStyled } from './CardStyled/CardStyled.styles'
import { CardTitle, CardAnchor, CardLocalLink } from './card.styles'
import { TypeResources } from './types'
import CardLink from './CardLink/CardLink'

export default function Card({ title, theme, url, external }: TypeResources) {
  const jsxCardContent = (
    <div>
      <CardTitle>{title}</CardTitle>
      <CardLink theme={theme} title={title} />
    </div>
  )

  return (
    <CardStyled theme={theme}>
      {external ? (
        <CardAnchor href={url} theme={theme} target='_blank' rel='noreferrer'>
          {jsxCardContent}
        </CardAnchor>
      ) : (
        <CardLocalLink to={url} theme={theme}>
          {jsxCardContent}
        </CardLocalLink>
      )}
    </CardStyled>
  )
}
