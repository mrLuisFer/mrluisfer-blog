import { reactChildren } from 'src/types/reactChildren'
import { SidebarScrolledStyled } from './sidebarScroll.styles'

type SidebarScrollProps = {
  children: reactChildren | any
  gridArea: string
  left?: boolean
  right?: boolean
}

export default function SidebarScroll({
  children,
  gridArea,
  left = false,
  right = false,
}: SidebarScrollProps) {
  return (
    <SidebarScrolledStyled gridArea={gridArea} left={left} right={right}>
      {children}
    </SidebarScrolledStyled>
  )
}
