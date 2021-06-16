import { PropsWithChildren } from 'react'
import LogoMobile from '../../assets/mobile/logo-mobile.svg'
import { HeaderStyled, HeaderLogo } from './Hader.styles'

export default function Header({ children }: JSX.ElementChildrenAttribute | PropsWithChildren<{}>) {
  return (
    <HeaderStyled>
      <HeaderLogo src={LogoMobile} alt='mrLuisFer' />
      <>{children}</>
    </HeaderStyled>
  )
}
