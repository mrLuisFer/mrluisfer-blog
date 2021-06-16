import { PropsWithChildren } from 'react'
import LogoMobile from '../../assets/mobile/logo-mobile.svg'
import { HeaderStyled } from './Hader.styles'

export default function Header({ children }: JSX.ElementChildrenAttribute | PropsWithChildren<{}>) {
  return (
    <HeaderStyled>
      <img src={LogoMobile} alt='mrLuisFer' />
      <div>{children}</div>
    </HeaderStyled>
  )
}
