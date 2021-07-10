import { useContext } from 'react'
import { Context } from 'src/context/Context'
import MenuWhiteIcon from 'src/assets/icons/mobileNav/menu-white-icon.svg'
import MenuDarkIcon from 'src/assets/icons/mobileNav/menu-icon.svg'
import ImgComponent from './ImgComponent'

export default function MenuIcon() {
  const { isDarkMode } = useContext(Context)

  return (
    <div>
      {isDarkMode ? <ImgComponent src={MenuWhiteIcon} /> : <ImgComponent src={MenuDarkIcon} />}
    </div>
  )
}
