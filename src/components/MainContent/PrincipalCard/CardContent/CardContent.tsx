import { FlexContent, PrincipalCardText, PrincipalCardComputerImg } from './cardContent.styles'
import ComputerImg from 'src/assets/principalCard-computer.svg'

export default function CardContent() {
  return (
    <FlexContent>
      <PrincipalCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies a pulvinar non, lobortis
        non libero. Ut mauris ex, lacinia sit amet ultrices ac, rutrum at mauris. Curabitur egestac
        quis semper magna, non fermentum elit. Nam quam mi, consequat vel tincidunt ut, faucibus nec
        orci.
      </PrincipalCardText>
      <PrincipalCardComputerImg src={ComputerImg} alt='Computer' draggable='false' />
    </FlexContent>
  )
}
