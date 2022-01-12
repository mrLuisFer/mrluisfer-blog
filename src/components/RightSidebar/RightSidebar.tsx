import SidebarComplete from './SidebarComplete/SidebarComplete'
import { useDarkMode } from 'src/hooks/useDarkMode'
import SidebarMinified from './SidebarMinified/SidebarMinified'

export default function RightSidebar() {
  const { rightCompleteSidebar } = useDarkMode()

  if (rightCompleteSidebar) {
    return <SidebarComplete />
  } else {
    return <SidebarMinified />
  }
}
