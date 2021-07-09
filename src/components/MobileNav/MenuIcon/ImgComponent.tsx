import { MenuIconStyled } from './menuIcon.styles'

type Props = {
  src: string
}

export default function ImgComponent({ src }: Props) {
  return <MenuIconStyled src={src} alt='Menu' title='Open Menu' />
}
