import RigthArrow from 'src/assets/icons/right-arrow.svg'
import { CardLinkStyled, CardFlex, CardLinkIcon } from './cardLink.styles'
import { CardLinkProps } from '../types'

export default function CardLink({ url, theme }: CardLinkProps) {
  return (
    <CardFlex>
      <CardLinkStyled href={url} theme={theme} target='_blank' rel='noreferrer'>
        Saber mas...
      </CardLinkStyled>
      <CardLinkIcon className='.img' src={RigthArrow} alt='Saber mas...' />
    </CardFlex>
  )
}
