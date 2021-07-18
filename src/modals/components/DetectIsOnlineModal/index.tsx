import { Container, ModalImg, ModalImgContainer, Text, Title } from './DetectIsOnlineModal.styles'
import { useIsConnect } from 'src/hooks/useIsConnect'
import Astronaut from 'src/assets/illustrations/errors/astronaut.svg'
import Modal from '../../Modal'
import TryAgainBtn from './TryAgainBtn'

export default function DetectIsOnlineModal() {
  const isConnectDomNode: HTMLElement | null = document.getElementById('isConnect-modal')

  const { isConnected } = useIsConnect()

  console.log(isConnected)

  if (isConnectDomNode === null) {
    return <div></div>
  }

  return (
    <>
      {!isConnected && (
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
