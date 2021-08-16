import { Context } from 'src/context/Context'
import { SidebarMinifiedStyled, MinifiedIcon } from './SidebarMinified.styles'
import { useContext } from 'react'
import sidebarExpand from 'src/assets/icons/sidebar/sidebar-expand.svg'

export default function SidebarMinified() {
  const { rightCompleteSidebar, setRightCompleteSidebar } = useContext(Context)

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
