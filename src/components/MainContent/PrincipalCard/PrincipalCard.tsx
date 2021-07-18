import { Dispatch, SetStateAction } from 'react'
import { PrincipalCardStyled } from './principalCard.styles'
import CardContent from './CardContent/CardContent'
import CardHeader from './CardHeader/CardHeader'
import CardTechs from './CardTechs/CardTechs'

type PrincipalCardProps = {
  setShowPrincipalCard: Dispatch<SetStateAction<boolean>>
}

export default function PrincipalCard({ setShowPrincipalCard }: PrincipalCardProps) {
  return (
    <PrincipalCardStyled>
      <CardHeader setShowPrincipalCard={setShowPrincipalCard} />
      <CardContent />
      <CardTechs />
    </PrincipalCardStyled>
  )
}
