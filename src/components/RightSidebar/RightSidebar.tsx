import Card from './Card/Card'
import { resourcesLinks } from './resourcesLinks'
import { RightSidebarStyled, RightSideTitle } from './rightSidebar.styles'

export default function RightSidebar() {
  return (
    <RightSidebarStyled>
      <RightSideTitle>Mas Recursos</RightSideTitle>
      {resourcesLinks.map(({ title, url, theme }) => (
        <Card title={title} url={url} key={title} theme={theme} />
      ))}
    </RightSidebarStyled>
  )
}
