import { useContext } from 'react'
import { ThemeContext } from 'src/App/ThemeContext/ThemeContext'
import SidebarComplete from './SidebarComplete/SidebarComplete'
import SidebarMinified from './SidebarMinified/SidebarMinified'

export default function RightSidebar() {
  const { completeSidebar } = useContext(ThemeContext)

  if (completeSidebar) {
    return <SidebarComplete />
  } else {
    return <SidebarMinified />
  }
}
