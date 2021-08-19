import { useContext } from 'react'
import LeftSidebarComplete from './LeftSidebarComplete'
import LeftSidebarMinifeied from './LeftSidebarMinified'
import { Context } from 'src/context/Context'

export default function LeftSidebar() {
  const { leftCompleteSidebar } = useContext(Context)

  return <>{leftCompleteSidebar ? <LeftSidebarComplete /> : <LeftSidebarMinifeied />}</>
}
