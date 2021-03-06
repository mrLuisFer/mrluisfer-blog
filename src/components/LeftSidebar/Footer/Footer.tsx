import { FooterStyled, FooterText } from './Footer.styles'
import GreenHeart from 'src/assets/icons/heart-icon.svg'
import HiddeSidebarToggle from './HiddeSidebarToggle'

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <FooterText title='By mrLuisFer'>
          Hecho con <span>React</span> {'&'}
        </FooterText>
        <img src={GreenHeart} alt='Heart' draggable='false' title='Hecho con amor :D' />
      </FooterStyled>
      <HiddeSidebarToggle />
    </>
  )
}
