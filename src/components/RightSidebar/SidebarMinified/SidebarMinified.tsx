import { Dispatch, SetStateAction } from 'react'
import { SidebarMinifiedStyled } from './SidebarMinified.styles'

type Props = {
  setCompleteSidebar: Dispatch<SetStateAction<boolean>>
}
export default function SidebarMinified({ setCompleteSidebar }: Props) {
  return (
    <SidebarMinifiedStyled>
      <p onClick={() => setCompleteSidebar(true)}>Mostrar</p>
    </SidebarMinifiedStyled>
  )
}
