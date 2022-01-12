import { useContext } from 'react'
import SidebarComplete from './SidebarComplete/SidebarComplete'
import SidebarMinified from './SidebarMinified/SidebarMinified'
import { DarkModeCtx } from 'src/context/DarkModeCtx/DarkModeContext'

export default function RightSidebar() {
  const { rightCompleteSidebar } = useContext(DarkModeCtx)

  if (rightCompleteSidebar) {
    return <SidebarComplete />
  } else {
    return <SidebarMinified />
  }
}
