import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import { MobileNavStyled, MobileNavTitle } from './MobileNav.styles'
import MenuIcon from './MenuIcon'

export default function MobileNav() {
  const { setIsOpenMenu } = useContext(MenuMobileContext)

  return (
    <MobileNavStyled>
      <MobileNavTitle onClick={() => setIsOpenMenu(false)}>
        <Link to='/'>
          <span>mr</span>LuisFer
        </Link>
      </MobileNavTitle>
      <MenuIcon />
    </MobileNavStyled>
  )
}
