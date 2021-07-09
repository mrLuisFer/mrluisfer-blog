import { useContext } from 'react'
import { Context } from 'src/context/Context'
import { MenuMobileContext } from 'src/context/MenuMobileContext/MenuMobileContext'
import MenuWhiteIcon from 'src/assets/icons/mobileNav/menu-white-icon.svg'
import MenuDarkIcon from 'src/assets/icons/mobileNav/menu-icon.svg'
import ImgComponent from './ImgComponent'

export default function MenuIco() {
  const { isDarkMode } = useContext(Context)
  const { setIsOpenMenu } = useContext(MenuMobileContext)

  return (
    <div onClick={() => setIsOpenMenu(true)} aria-hidden='true'>
      {isDarkMode ? <ImgComponent src={MenuWhiteIcon} /> : <ImgComponent src={MenuDarkIcon} />}
    </div>
  )
}
