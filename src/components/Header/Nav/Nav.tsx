import { NavLink } from 'react-router-dom'
import MenuMobile from '../../../assets/mobile/menu-mobile.svg'
import { NavStyled, NavDesktopStyled } from './Nav.styles'

type NavProps = {
  setThemeState: Function | React.Dispatch<React.SetStateAction<string>>
}

export default function Nav({ setThemeState }: NavProps) {
  return (
    <NavStyled>
      <img src={MenuMobile} alt='Menu' />
      <NavDesktopStyled>
        <NavLink to='/'>Home</NavLink>
      </NavDesktopStyled>
    </NavStyled>
  )
}
