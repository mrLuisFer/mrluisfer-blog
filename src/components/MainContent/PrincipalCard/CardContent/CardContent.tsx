import { FlexContent, PrincipalCardText, PrincipalCardComputerImg } from './cardContent.styles'
import ComputerImg from 'src/assets/principalCard-computer.svg'

export default function CardContent() {
  return (
    <FlexContent>
      <PrincipalCardText>
        Este Blog fue creado con la intención de informar y ayudar a las personas a conocer las
        herramientas y tecnologías que podemos utilizar para nuestros proyectos.
        <br />
        Los Posts no están verificados pero se hacen muchas pruebas para que la información sea
        correcta y también con ciertos ejemplos que tú mismo puedes usar.
        <br />
        ¡Así que espero que te diviertas estando aquí!
      </PrincipalCardText>
      <PrincipalCardComputerImg src={ComputerImg} alt='Computer' draggable='false' />
    </FlexContent>
  )
}
