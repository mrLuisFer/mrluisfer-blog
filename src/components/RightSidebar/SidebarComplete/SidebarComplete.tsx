import { useContext } from 'react'
import { ThemeContext } from 'src/App/ThemeContext/ThemeContext'
import sidebarCollapse from 'src/assets/icons/sidebar/sidebar-collapse.svg'
import { LineSeparate } from '../../LineSeparate/lineSeparate.styles'
import SidebarScroll from '../../SidebarScroll/SidebarScroll'
import {
  RightSideTitle,
  SidebarCollapseIcon,
  SidebarCollapse,
  ContainerForHover,
} from './rightSidebar.styles'
import NewsLetterForm from '../NewsLetterForm'
import CardContainer from '../Cards'

export default function SidebarComplete() {
  const { setCompleteSidebar } = useContext(ThemeContext)

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
