import { navLinks } from '../Header/Nav/navLinks'
import closeIconLight from '../../assets/close-icon-light.svg'
import {
  MenuMobileModalBg,
  MenuMobileFlex,
  MenuMobileCloseIcon,
  NavLinksContainer,
  MenuMobileLink,
} from './MenuMobileModal.styles'

type MenuMobileProps = {
  setIsMenuModalOpen: Function
}

export default function MenuMobileModal({ setIsMenuModalOpen }: MenuMobileProps) {
  return (
    <MenuMobileModalBg>
      <MenuMobileFlex>
        <MenuMobileCloseIcon
          src={closeIconLight}
          alt='Close'
          onClick={() => setIsMenuModalOpen(false)}
        />
      </MenuMobileFlex>
      <NavLinksContainer>
        {navLinks.map((navLink) => (
          <MenuMobileLink
            to={navLink.url}
            key={navLink.id}
            activeClassName='navLinkActive'
            exact={navLink.exact}
          >
            {navLink.text}
          </MenuMobileLink>
        ))}
      </NavLinksContainer>
    </MenuMobileModalBg>
  )
}
