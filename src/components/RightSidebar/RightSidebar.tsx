import { useContext } from 'react'
import { Context } from 'src/context/Context'
import SidebarComplete from './SidebarComplete/SidebarComplete'
import SidebarMinified from './SidebarMinified/SidebarMinified'

export default function RightSidebar() {
  const { completeSidebar } = useContext(Context)

  if (completeSidebar) {
    return <SidebarComplete />
  } else {
    return <SidebarMinified />
  }
}
