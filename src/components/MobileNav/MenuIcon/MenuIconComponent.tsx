import MenuDarkIcon from 'src/assets/icons/mobileNav/menu-icon.svg'
import MenuWhiteIcon from 'src/assets/icons/mobileNav/menu-white-icon.svg'
import { MenuIconStyled } from './menuIcon.styles'
import { useMenuMobileContext } from 'src/context/MenuMobileContext'

export default function MenuIconComponent({ isDarkMode }: { isDarkMode: boolean }) {
  const { setIsOpenMenu } = useMenuMobileContext()

  return (
    <div onClick={() => setIsOpenMenu(true)} aria-hidden='true'>
      <MenuIconStyled
        src={isDarkMode ? MenuWhiteIcon : MenuDarkIcon}
        alt='Menu'
        title='Open Menu'
        draggable='false'
      />
    </div>
  )
}
