import Modal from '../../Modal'
import { useIsConnect } from 'src/hooks/useIsConnect'

export default function DetectIsOnlineModal() {
  const isConnectDomNode = document.getElementById('isConnect-modal')

  const { isConnected } = useIsConnect()

  console.log(isConnected)

  if (isConnectDomNode === null) {
    return <div></div>
  }

  return (
    <Modal htmlElement={isConnectDomNode}>
      <div>
        <p>prueba</p>
      </div>
    </Modal>
  )
}
