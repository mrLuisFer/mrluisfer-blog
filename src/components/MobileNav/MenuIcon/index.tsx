import { Context } from 'src/context/Context'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import { useContext } from 'react'
import CloseMenuIconComponent from './CloseMenuIconComponent'
import MenuIconComponent from './MenuIconComponent'

export default function MenuIcon() {
  const { isDarkMode } = useContext(Context)
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuMobileContext)

  const handleCloseMenu = (): void => setIsOpenMenu(false)
  const handleOpenMenu = (): void => setIsOpenMenu(true)

  return (
    <div>
      {isOpenMenu ? (
        <CloseMenuIconComponent isDarkMode={isDarkMode} handleMenuFunc={handleCloseMenu} />
      ) : (
        <MenuIconComponent isDarkMode={isDarkMode} handleMenuFunc={handleOpenMenu} />
      )}
    </div>
  )
}
