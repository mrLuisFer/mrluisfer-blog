import { techNameStack } from './techNameStack'
import { TechsFlex, TechNames, TechTitle, CardTechsStyled } from './cardTechs.styles'

export default function CardTechs() {
  return (
    <CardTechsStyled>
      <TechTitle>Tecnologias Usuales:</TechTitle>
      <TechsFlex>
        {techNameStack.map((techName) => (
          <TechNames key={techName}>#{techName}</TechNames>
        ))}
      </TechsFlex>
    </CardTechsStyled>
  )
}
