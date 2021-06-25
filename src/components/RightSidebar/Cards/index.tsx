import Card from './Card/Card'
import { resourcesLinks } from './resourcesLinks'
import { CardsContainer } from './Card/card.styles'

export default function CardContainer() {
  return (
    <CardsContainer>
      {resourcesLinks.map(({ title, url, theme, external }) => (
        <Card title={title} url={url} key={title} theme={theme} external={external} />
      ))}
    </CardsContainer>
  )
}
