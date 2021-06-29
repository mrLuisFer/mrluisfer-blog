import { Dispatch, SetStateAction } from 'react'
import { LineSeparate } from '../../LineSeparate/lineSeparate.styles'
import SidebarScroll from '../../SidebarScroll/SidebarScroll'
import { RightSideTitle } from '../rightSidebar.styles'
import NewsLetterForm from '../NewsLetterForm'
import CardContainer from '../Cards'

type Props = {
  setCompleteSidebar: Dispatch<SetStateAction<boolean>>
}
export default function SidebarComplete({ setCompleteSidebar }: Props) {
  return (
    <SidebarScroll gridArea='right' right>
      <p onClick={() => setCompleteSidebar(false)}>Ocultar</p>
      <RightSideTitle>Mas Recursos</RightSideTitle>
      <CardContainer />
      <LineSeparate />
      <NewsLetterForm />
    </SidebarScroll>
  )
}
