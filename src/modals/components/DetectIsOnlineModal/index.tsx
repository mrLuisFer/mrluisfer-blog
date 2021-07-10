import Modal from '../../Modal'
import { useIsConnect } from 'src/hooks/useIsConnect'
import { Container } from './DetectIsOnlineModal.styles'
import Astronaut from 'src/assets/illustrations/astronaut.svg'

export default function DetectIsOnlineModal() {
  const isConnectDomNode = document.getElementById('isConnect-modal')

  const { isConnected } = useIsConnect()

  console.log(isConnected)

  if (isConnectDomNode === null) {
    return <div></div>
  }

  return (
    <>
      {isConnected && (
        <Modal htmlElement={isConnectDomNode}>
          <Container>
            <img src={Astronaut} alt='Error' />
            <p>prueba</p>
          </Container>
        </Modal>
      )}
    </>
  )
}
