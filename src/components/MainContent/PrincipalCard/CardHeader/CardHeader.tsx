import { Dispatch, SetStateAction } from 'react'
import IconCloseLight from 'src/assets/close-icon-light.svg'
import { PrincipalCardTitle, PrincipalCardIcon, FlexHeader } from './cardHeader.styles'

type CardHeaderProps = {
  setShowPrincipalCard: Dispatch<SetStateAction<boolean>>
}

export default function CardHeader({ setShowPrincipalCard }: CardHeaderProps) {
  const handleClickShowMsg = () => {
    setShowPrincipalCard(false)
    localStorage.setItem('principalCard', 'closed')
  }

  return (
    <FlexHeader>
      <PrincipalCardTitle>
        Espero disfrutes estar aqui, te cuento un poquito sobre el porque de este Blog
      </PrincipalCardTitle>
      <PrincipalCardIcon
        src={IconCloseLight}
        alt='Close principal card'
        draggable='false'
        onClick={handleClickShowMsg}
      />
    </FlexHeader>
  )
}
