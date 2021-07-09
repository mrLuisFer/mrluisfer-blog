import { useContext } from 'react'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import MobileNav from 'src/components/MobileNav'
import MobileMenu from 'src/components/MobileMenu'
import Routes from 'src/Routes/Routes'

export default function MobileLayout() {
  const { isOpenMenu } = useContext(MenuMobileContext)

  return (
    <>
      <MobileNav />
      {isOpenMenu ? (
        <MobileMenu />
      ) : (
        <>
          <Routes />
        </>
      )}
    </>
  )
}
