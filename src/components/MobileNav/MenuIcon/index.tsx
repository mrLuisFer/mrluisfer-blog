import { useContext } from 'react'
import CloseMenuIconComponent from './CloseMenuIconComponent'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import MenuIconComponent from './MenuIconComponent'
import { useDarkMode } from 'src/hooks/useDarkMode'

export default function MenuIcon() {
  const { isDarkMode } = useDarkMode()
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
