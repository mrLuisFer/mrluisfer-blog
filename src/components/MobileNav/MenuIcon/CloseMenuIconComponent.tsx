import { CloseIconStyled } from './menuIcon.styles'
import { MenuIconProps } from 'src/types/menuIconProps'
import CloseIconDark from 'src/assets/close-icon-dark.svg'
import CloseIconLight from 'src/assets/close-icon-light.svg'

export default function CloseMenuIconComponent({ isDarkMode, handleMenuFunc }: MenuIconProps) {
  return (
    <div onClick={handleMenuFunc} aria-hidden='true'>
      <CloseIconStyled
        src={isDarkMode ? CloseIconLight : CloseIconDark}
        alt='Close Menu'
        title='Close Menu'
      />
    </div>
  )
}
