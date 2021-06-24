import Card from './Card'
import { resourcesLinks } from '../resourcesLinks'
import { CardsContainer } from './card.styles'

export default function CardContainer() {
  return (
    <CardsContainer>
      {resourcesLinks.map(({ title, url, theme }) => (
        <Card title={title} url={url} key={title} theme={theme} />
      ))}
    </CardsContainer>
  )
}
