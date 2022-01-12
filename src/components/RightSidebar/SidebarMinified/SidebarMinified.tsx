import { SidebarMinifiedStyled, MinifiedIcon } from './SidebarMinified.styles'
import sidebarExpand from 'src/assets/icons/sidebar/sidebar-expand.svg'
import { useDarkMode } from 'src/hooks/useDarkMode'

export default function SidebarMinified() {
  const { rightCompleteSidebar, setRightCompleteSidebar } = useDarkMode()

  return (
    <SidebarMinifiedStyled completeSidebar={rightCompleteSidebar}>
      <MinifiedIcon
        src={sidebarExpand}
        alt='Mostrar sidebar'
        onClick={() => setRightCompleteSidebar(true)}
        aria-hidden='true'
        title='Mostrar Recursos ✨'
        draggable='false'
      />
    </SidebarMinifiedStyled>
  )
}
