import { useMediaQuery } from 'react-responsive'

export const useScreenType = (): string => {
  const is3Cols = useMediaQuery({ minWidth: 1024 })
  const is2Cols = useMediaQuery({ minWidth: 768 })
  const is1Cols = useMediaQuery({ minWidth: 100 })

  if (is3Cols) {
    return '3-cols'
  }
  if (is2Cols) {
    return '2-cols'
  }
  if (is1Cols) {
    return '1-cols'
  }

  return 'fullscreen'
}
