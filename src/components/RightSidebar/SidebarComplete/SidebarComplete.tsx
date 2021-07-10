import { useContext } from 'react'
import { Context } from 'src/context/Context'
import sidebarCollapse from 'src/assets/icons/sidebar/sidebar-collapse.svg'
import { LineSeparate } from '../../common/LineSeparate/lineSeparate.styles'
import SidebarScroll from '../../common/SidebarScroll/SidebarScroll'
import {
  RightSideTitle,
  SidebarCollapseIcon,
  SidebarCollapse,
  ContainerForHover,
} from './rightSidebar.styles'
import NewsLetterForm from '../NewsLetterForm'
import CardContainer from '../Cards'

export default function SidebarComplete() {
  const { setCompleteSidebar } = useContext(Context)

  return (
    <SidebarScroll gridArea='right' right>
      <ContainerForHover>
        <SidebarCollapse
          onClick={() => setCompleteSidebar(false)}
          title='Click para ocultar sidebar'
        >
          <SidebarCollapseIcon src={sidebarCollapse} alt='Ocultar Sidebar' draggable='false' />
          <p>Ocultar sidebar</p>
        </SidebarCollapse>
        <RightSideTitle>Mas Recursos</RightSideTitle>
        <CardContainer />
        <LineSeparate />
        <NewsLetterForm />
      </ContainerForHover>
    </SidebarScroll>
  )
}
