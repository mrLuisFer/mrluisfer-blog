import { NavLink } from 'react-router-dom'
import { NavDesktopStyled } from './Nav.styles'

type NavProps = {
  setThemeState: Function | React.Dispatch<React.SetStateAction<string>>
  setIsMenuModalOpen: Function | React.Dispatch<React.SetStateAction<boolean>>
}

export default function Nav({ setThemeState, setIsMenuModalOpen }: NavProps) {
  return (
    <NavDesktopStyled>
      <NavLink to='/'>Home</NavLink>
    </NavDesktopStyled>
  )
}
