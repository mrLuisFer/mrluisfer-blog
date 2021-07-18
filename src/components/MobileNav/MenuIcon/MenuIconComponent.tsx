import { MenuIconProps } from 'src/types/menuIconProps'
import { MenuIconStyled } from './menuIcon.styles'
import MenuDarkIcon from 'src/assets/icons/mobileNav/menu-icon.svg'
import MenuWhiteIcon from 'src/assets/icons/mobileNav/menu-white-icon.svg'

export default function MenuIconComponent({ isDarkMode, handleMenuFunc }: MenuIconProps) {
  return (
    <div onClick={handleMenuFunc} aria-hidden='true'>
      <MenuIconStyled
        src={isDarkMode ? MenuWhiteIcon : MenuDarkIcon}
        alt='Menu'
        title='Open Menu'
        draggable='false'
      />
    </div>
  )
}
