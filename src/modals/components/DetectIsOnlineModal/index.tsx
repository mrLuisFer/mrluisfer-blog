import Modal from '../../Modal'
import { useIsConnect } from 'src/hooks/useIsConnect'
import { Container, ModalImg } from './DetectIsOnlineModal.styles'
import Astronaut from 'src/assets/illustrations/errors/astronaut.svg'

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
            <ModalImg src={Astronaut} alt='Error' />
            <p>connection lost</p>
          </Container>
        </Modal>
      )}
    </>
  )
}
