import { useContext } from 'react'
import SideBarScroll from '../common/SidebarScroll/SidebarScroll'
import LeftSidebarComplete from './LeftSidebarComplete'
import LeftSidebarMinifeied from './LeftSidebarMinified'
import { Context } from 'src/context/Context'

export default function LeftSidebar() {
  const { leftCompleteSidebar } = useContext(Context)

  return (
    <SideBarScroll gridArea='left' left>
      {leftCompleteSidebar ? <LeftSidebarComplete /> : <LeftSidebarMinifeied />}
    </SideBarScroll>
  )
}
