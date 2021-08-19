import { useEffect, useState } from 'react'
import ArrowToTop from 'src/assets/icons/arrow-to-top.svg'
import { BtnStyled } from './styles'

export default function SendToTopBtn() {
  const [isScroll, setIsScroll] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop: number = document.documentElement.scrollTop
      setIsScroll(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  console.log(isScroll)

  return (
    <BtnStyled title='Volver al incio' isScroll={isScroll}>
      <img src={ArrowToTop} alt='Volver al incio' />
    </BtnStyled>
  )
}
