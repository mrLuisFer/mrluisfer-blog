import Modal from '../../Modal'
import { useIsConnect } from 'src/hooks/useIsConnect'
import TryAgainBtn from './TryAgainBtn'
import { Container, ModalImg, ModalImgContainer, Text, Title } from './DetectIsOnlineModal.styles'
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
            <div>
              <Title>Oops!</Title>
              <ModalImgContainer>
                <ModalImg src={Astronaut} />
              </ModalImgContainer>
            </div>
            <div>
              <Text>Connection Lost</Text>
              <Text opacity={0.8}>Please check your internet connection</Text>
              <TryAgainBtn />
            </div>
          </Container>
        </Modal>
      )}
    </>
  )
}
