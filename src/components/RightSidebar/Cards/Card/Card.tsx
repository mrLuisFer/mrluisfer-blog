import { TypeResources } from './types'
import CardLink from './CardLink/CardLink'
import { CardStyled } from './CardStyled/CardStyled.styles'
import { CardTitle, CardAnchor, CardLocalLink } from './card.styles'

export default function Card({ title, theme, url, external }: TypeResources) {
  const jsxCardContent = (
    <>
      <CardTitle>{title}</CardTitle>
      <CardLink theme={theme} />
    </>
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
