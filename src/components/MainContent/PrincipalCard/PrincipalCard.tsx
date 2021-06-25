import { Dispatch, SetStateAction } from 'react'
import CardHeader from './CardHeader/CardHeader'
import CardContent from './CardContent/CardContent'
import CardTechs from './CardTechs/CardTechs'
import { PrincipalCardStyled } from './principalCard.styles'

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
