import SidebarExpand from 'src/assets/icons/sidebar/sidebar-expand.svg'
import { useDarkMode } from 'src/hooks/useDarkMode'
import { ToggleIcon } from './ToggleCompleteSidebar.styles'

export default function ToggleCompleteSidebar() {
  const { setLeftCompleteSidebar } = useDarkMode()

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
