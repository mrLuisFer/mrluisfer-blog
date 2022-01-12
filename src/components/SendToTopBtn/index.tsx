import { BtnStyled } from './styles'
import { useScroll } from 'src/hooks/useScroll'
import { BsArrowUpSquareFill } from 'react-icons/bs'

export default function SendToTopBtn() {
  const { showBtn } = useScroll()

  return (
    <BtnStyled title='Volver al incio' isScroll={showBtn}>
      <BsArrowUpSquareFill size='2rem' />
    </BtnStyled>
  )
}
