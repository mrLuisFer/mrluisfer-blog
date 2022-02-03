import CloseIconDark from 'src/assets/close-icon-dark.svg'
import CloseIconLight from 'src/assets/close-icon-light.svg'
import { useMenuMobileContext } from 'src/context/MenuMobileContext'
import { CloseIconStyled } from './menuIcon.styles'

export default function CloseMenuIconComponent({ isDarkMode }: { isDarkMode: boolean }) {
  const { setIsOpenMenu } = useMenuMobileContext()

  return (
    <div onClick={() => setIsOpenMenu(false)} aria-hidden='true'>
      <CloseIconStyled
        src={isDarkMode ? CloseIconLight : CloseIconDark}
        alt='Close Menu'
        title='Close Menu'
        draggable='false'
      />
    </div>
  )
}
