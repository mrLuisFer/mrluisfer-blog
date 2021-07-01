import { useContext } from 'react'
import sidebarExpand from 'src/assets/icons/sidebar/sidebar-expand.svg'
import { Context } from 'src/context/Context'
import { SidebarMinifiedStyled, MinifiedIcon } from './SidebarMinified.styles'

export default function SidebarMinified() {
  const { completeSidebar, setCompleteSidebar } = useContext(Context)

  return (
    <SidebarMinifiedStyled completeSidebar={completeSidebar}>
      <MinifiedIcon
        src={sidebarExpand}
        alt='Mostrar sidebar'
        onClick={() => setCompleteSidebar(true)}
        aria-hidden='true'
        title='Mostrar Recursos ✨'
        draggable='false'
      />
    </SidebarMinifiedStyled>
  )
}
