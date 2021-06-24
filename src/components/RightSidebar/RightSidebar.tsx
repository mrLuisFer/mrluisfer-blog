import CardContainer from './Card'
import SidebarScroll from '../SidebarScroll/SidebarScroll'
import { RightSideTitle } from './rightSidebar.styles'

export default function RightSidebar() {
  return (
    <SidebarScroll gridArea='right' right>
      <RightSideTitle>Mas Recursos</RightSideTitle>
      <CardContainer />
    </SidebarScroll>
  )
}
