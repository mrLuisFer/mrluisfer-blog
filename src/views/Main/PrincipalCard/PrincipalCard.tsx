import CardHeader from './CardHeader/CardHeader'
import CardContent from './CardContent/CardContent'
import CardTechs from './CardTechs/CardTechs'

import { PrincipalCardStyled } from './principalCard.styles'

export default function PrincipalCard() {
  return (
    <PrincipalCardStyled>
      <CardHeader />
      <CardContent />
      <CardTechs />
    </PrincipalCardStyled>
  )
}
