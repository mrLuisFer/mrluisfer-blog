import { useContext } from 'react'
import LeftSidebarComplete from './LeftSidebarComplete'
import LeftSidebarMinifeied from './LeftSidebarMinified'
import { DarkModeCtx } from 'src/context/DarkModeCtx/DarkModeContext'

export default function LeftSidebar() {
  const { leftCompleteSidebar } = useContext(DarkModeCtx)

  return <>{leftCompleteSidebar ? <LeftSidebarComplete /> : <LeftSidebarMinifeied />}</>
}
