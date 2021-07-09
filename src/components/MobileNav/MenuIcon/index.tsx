import { useContext } from 'react'
import { Context } from 'src/context/Context'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import MenuWhiteIcon from 'src/assets/icons/mobileNav/menu-white-icon.svg'
import MenuDarkIcon from 'src/assets/icons/mobileNav/menu-icon.svg'
import CloseIconDark from 'src/assets/close-icon-dark.svg'
import CloseIconLight from 'src/assets/close-icon-light.svg'
import ImgComponent from './ImgComponent'

export default function MenuIco() {
  const { isDarkMode } = useContext(Context)
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuMobileContext)

  const darkIcon = isOpenMenu ? CloseIconDark : MenuDarkIcon
  const lightIcon = isOpenMenu ? CloseIconLight : MenuWhiteIcon

  return (
    <div onClick={() => setIsOpenMenu(!isOpenMenu)} aria-hidden='true'>
      {isDarkMode ? <ImgComponent src={lightIcon} /> : <ImgComponent src={darkIcon} />}
    </div>
  )
}
