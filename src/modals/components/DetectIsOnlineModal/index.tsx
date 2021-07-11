import Modal from '../../Modal'
import { useIsConnect } from 'src/hooks/useIsConnect'
import { Container, ModalImg, ModalImgContainer, TextContainer } from './DetectIsOnlineModal.styles'

// Assets
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
            <ModalImgContainer>
              <ModalImg src={Astronaut} />
            </ModalImgContainer>
            <TextContainer>
              <p>connection lost</p>
            </TextContainer>
          </Container>
        </Modal>
      )}
    </>
  )
}
