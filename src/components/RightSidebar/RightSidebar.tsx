import { Context } from 'src/context/Context'
import { useContext } from 'react'
import SidebarComplete from './SidebarComplete/SidebarComplete'
import SidebarMinified from './SidebarMinified/SidebarMinified'

export default function RightSidebar() {
  const { rightCompleteSidebar } = useContext(Context)

  if (rightCompleteSidebar) {
    return <SidebarComplete />
  } else {
    return <SidebarMinified />
  }
}
