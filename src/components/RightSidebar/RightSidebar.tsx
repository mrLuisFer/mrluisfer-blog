import { useState } from 'react'
import SidebarComplete from './SidebarComplete/SidebarComplete'
import SidebarMinified from './SidebarMinified/SidebarMinified'

export default function RightSidebar() {
  const [completeSidebar, setCompleteSidebar] = useState(true)

  if (completeSidebar) {
    return <SidebarComplete setCompleteSidebar={setCompleteSidebar} />
  } else {
    return <SidebarMinified setCompleteSidebar={setCompleteSidebar} />
  }
}
