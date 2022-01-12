import { useDarkMode } from 'src/hooks/useDarkMode'
import LeftSidebarComplete from './LeftSidebarComplete'
import LeftSidebarMinifeied from './LeftSidebarMinified'

export default function LeftSidebar() {
  const { leftCompleteSidebar } = useDarkMode()

  return <>{leftCompleteSidebar ? <LeftSidebarComplete /> : <LeftSidebarMinifeied />}</>
}
