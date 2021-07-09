import { useContext } from 'react'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import MobileNav from 'src/components/MobileNav'
import Routes from 'src/Routes/Routes'

export default function MobileLayout() {
  const { isOpenMenu } = useContext(MenuMobileContext)

  console.log(isOpenMenu)

  return (
    <>
      {isOpenMenu ? (
        <p>Menu here</p>
      ) : (
        <>
          <MobileNav />
          <Routes />
        </>
      )}
    </>
  )
}
