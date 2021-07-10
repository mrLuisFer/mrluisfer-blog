import { useState, Dispatch, SetStateAction } from 'react'

type ReturnUseIsConnect = {
  isConnected: boolean
  setIsConnected: Dispatch<SetStateAction<boolean>>
}

export const useIsConnect = (): ReturnUseIsConnect => {
  const isOnline = window.navigator.onLine
  const [isConnected, setIsConnected] = useState<boolean>(isOnline)

  if (!isOnline) {
    setIsConnected(false)
  }

  return {
    isConnected,
    setIsConnected,
  }
}
