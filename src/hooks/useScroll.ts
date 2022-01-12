import { useEffect, useState, useCallback, Dispatch, SetStateAction } from 'react'

interface UseScrollReturn {
  showBtn: boolean
  setShowBtn: Dispatch<SetStateAction<boolean>>
}

export const useScroll = (): UseScrollReturn => {
  const [y, setY] = useState<number>(window.scrollY)
  const [showBtn, setShowBtn] = useState<boolean>(false)

  const handleScroll = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        console.log('up')
        setShowBtn(false)
      } else if (y < window.scrollY) {
        console.log('down')
        setShowBtn(true)
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return {
    showBtn,
    setShowBtn,
  }
}
