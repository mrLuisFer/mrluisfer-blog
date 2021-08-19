import ArrowToTop from 'src/assets/icons/arrow-to-top.svg'
import { BtnStyled } from './styles'

export default function SendToTopBtn() {
  return (
    <BtnStyled>
      <img src={ArrowToTop} alt='Volver al incio' />
    </BtnStyled>
  )
}
