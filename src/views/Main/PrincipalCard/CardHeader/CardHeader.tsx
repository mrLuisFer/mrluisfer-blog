import IconCloseLight from 'src/assets/close-icon-light.svg'
import { PrincipalCardTitle, PrincipalCardIcon, FlexHeader } from './cardHeader.styles'

export default function CardHeader() {
  return (
    <FlexHeader>
      <PrincipalCardTitle>
        Espero disfrutes estar aqui, te cuento un poquito sobre el porque de este Blog
      </PrincipalCardTitle>
      <PrincipalCardIcon src={IconCloseLight} alt='Close principal card' draggable='false' />
    </FlexHeader>
  )
}
