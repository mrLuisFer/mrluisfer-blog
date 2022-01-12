import ArrowToTop from 'src/assets/icons/arrow-to-top.svg'
import { BtnStyled } from './styles'
import { useScroll } from 'src/hooks/useScroll'

export default function SendToTopBtn() {
  const { showBtn } = useScroll()

  return (
    <BtnStyled title='Volver al incio' isScroll={showBtn}>
      <img src={ArrowToTop} alt='Volver al incio' />
    </BtnStyled>
  )
}
