import { Link } from 'react-router-dom'
import { MobileNavStyled, MobileNavTitle } from './MobileNav.styles'
import MenuIcon from './MenuIcon'
import { useMenuMobileContext } from 'src/context/MenuMobileContext'

export default function MobileNav() {
  const { setIsOpenMenu } = useMenuMobileContext()

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
