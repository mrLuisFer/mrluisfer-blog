import { navLinks } from '../Header/Nav/navLinks'

import { MenuMobileModalBg } from './MenuMobileModal.styles'

type MenuMobileProps = {
  setIsMenuModalOpen: Function
}

export default function MenuMobileModal({ setIsMenuModalOpen }: MenuMobileProps) {
  return (
    <MenuMobileModalBg>
      <div>
        {navLinks.map((navLink) => (
          <div key={navLink.id}>{navLink.text}</div>
        ))}
      </div>
    </MenuMobileModalBg>
  )
}
