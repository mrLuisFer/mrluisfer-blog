import { CardsContainer } from './Card/card.styles'
import { resourcesLinks } from './resourcesLinks'
import Card from './Card/Card'

export default function CardContainer() {
  return (
    <CardsContainer>
      {resourcesLinks.map(({ title, url, theme, external }) => (
        <Card title={title} url={url} key={title} theme={theme} external={external} />
      ))}
    </CardsContainer>
  )
}
