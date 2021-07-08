import { useState } from 'react'

export default function DetectIsOnlineModal() {
  const [isConnected, setIsConnected] = useState<boolean>(true)
  const isOnline = window.navigator.onLine

  if (!isOnline) {
    setIsConnected(false)
  }

  console.log(isConnected)

  return (
    <div>
      <p>prueba</p>
    </div>
  )
}
