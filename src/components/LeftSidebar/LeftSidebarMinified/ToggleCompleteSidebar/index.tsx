import { useContext } from 'react'
import SidebarExpand from 'src/assets/icons/sidebar/sidebar-expand.svg'
import { ToggleIcon } from './ToggleCompleteSidebar.styles'
import { DarkModeCtx } from 'src/context/DarkModeCtx/DarkModeContext'

export default function ToggleCompleteSidebar() {
  const { setLeftCompleteSidebar } = useContext(DarkModeCtx)

  const toggleCompleteSidebar = () => setLeftCompleteSidebar(true)

  return (
    <ToggleIcon
      alt='Mostrar sidebar'
      aria-hidden='true'
      onClick={toggleCompleteSidebar}
      src={SidebarExpand}
      title='Presiona para expandir la barra lateral'
    />
  )
}
