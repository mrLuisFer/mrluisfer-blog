import RigthArrow from 'src/assets/icons/right-arrow.svg'
import { CardLinkStyled, CardFlex, CardLinkIcon } from './cardLink.styles'
import { ThemeProps } from '../types'

export default function CardLink({ theme }: ThemeProps) {
  return (
    <CardFlex>
      <CardLinkStyled theme={theme}>Saber mas...</CardLinkStyled>
      <CardLinkIcon
        className='.img'
        draggable='false'
        src={RigthArrow}
        alt='Saber mas...'
        title='Saber mas...'
      />
    </CardFlex>
  )
}
