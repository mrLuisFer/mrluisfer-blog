import CardContainer from './Cards'
import SidebarScroll from '../SidebarScroll/SidebarScroll'
import { LineSeparate } from '../LineSeparate/lineSeparate.styles'
import { RightSideTitle } from './rightSidebar.styles'
import NewsLetterForm from './NewsLetterForm'

export default function RightSidebar() {
  return (
    <SidebarScroll gridArea='right' right>
      <RightSideTitle>Mas Recursos</RightSideTitle>
      <CardContainer />
      <LineSeparate />
      <NewsLetterForm />
    </SidebarScroll>
  )
}
