import { useContext } from 'react'
import sidebarExpand from 'src/assets/icons/sidebar/sidebar-expand.svg'
import { ThemeContext } from 'src/App/ThemeContext/ThemeContext'
import { SidebarMinifiedStyled, MinifiedIcon } from './SidebarMinified.styles'

export default function SidebarMinified() {
  const { completeSidebar, setCompleteSidebar } = useContext(ThemeContext)

  return (
    <SidebarMinifiedStyled completeSidebar={completeSidebar}>
      <MinifiedIcon
        src={sidebarExpand}
        alt='Show Sidebar'
        onClick={() => setCompleteSidebar(true)}
        aria-hidden='true'
      />
    </SidebarMinifiedStyled>
  )
}
