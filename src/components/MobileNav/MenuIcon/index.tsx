import { useContext } from 'react'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import { Context } from 'src/context/Context'

import MenuIconComponent from './MenuIconComponent'
import CloseMenuIconComponent from './CloseMenuIconComponent'

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
