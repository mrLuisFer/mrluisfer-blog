import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import { useContext } from 'react'
import MobileMenu from 'src/components/MobileMenu'
import MobileNav from 'src/components/MobileNav'
import Routes from 'src/Routes/Routes'

export default function MobileLayout() {
  const { isOpenMenu } = useContext(MenuMobileContext)

  return (
    <div>
      <MobileNav />
      {isOpenMenu ? <MobileMenu /> : <Routes />}
    </div>
  )
}
