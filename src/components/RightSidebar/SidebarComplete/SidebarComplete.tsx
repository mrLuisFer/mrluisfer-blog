import { DarkModeCtx } from 'src/context/DarkModeCtx/DarkModeContext'
import { LineSeparate } from '../../common/LineSeparate/lineSeparate.styles'
import { useContext } from 'react'
import sidebarCollapse from 'src/assets/icons/sidebar/sidebar-collapse.svg'
import SidebarScroll from '../../common/SidebarScroll/SidebarScroll'
import {
  ContainerForHover,
  RightSideTitle,
  SidebarCollapse,
  SidebarCollapseIcon,
} from './rightSidebar.styles'
import CardContainer from '../Cards'
import NewsLetterForm from '../NewsLetterForm'
import { rightSidebarComplete } from 'src/layout/utils/sidebarWidth'

export default function SidebarComplete() {
  const { setRightCompleteSidebar } = useContext(DarkModeCtx)

  return (
    <SidebarScroll gridArea='right' right sidebarWidth={rightSidebarComplete}>
      <ContainerForHover>
        <SidebarCollapse
          onClick={() => setRightCompleteSidebar(false)}
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
