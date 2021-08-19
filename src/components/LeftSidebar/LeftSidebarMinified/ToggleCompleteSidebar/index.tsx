import { useContext } from 'react'
import SidebarExpand from 'src/assets/icons/sidebar/sidebar-expand.svg'
import { ToggleIcon } from './ToggleCompleteSidebar.styles'
import { Context } from 'src/context/Context'

export default function ToggleCompleteSidebar() {
  const { setLeftCompleteSidebar } = useContext(Context)

  const toggleCompleteSidebar = () => setLeftCompleteSidebar(true)

  return (
    <ToggleIcon
      alt='Mostrar sidebar'
      aria-hidden='true'
      onClick={toggleCompleteSidebar}
      src={SidebarExpand}
    />
  )
}
