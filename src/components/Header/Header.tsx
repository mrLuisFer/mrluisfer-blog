import { useState } from 'react'
import LogoMobile from '../../assets/mobile/logo-mobile.svg'
import MenuMobileModal from '../MenuMobileModal/MenuMobileModal'
import Modal from '../Modal/Modal'
import MenuMobileIcon from '../../assets/mobile/menu-mobile.svg'
import Nav from './Nav/Nav'

import { HeaderStyled, HeaderLogo, HeaderMenuMobileIcon } from './Hader.styles'
const menuMobilaModalId: HTMLElement = document.getElementById('menu-mobile-modal')!

type HeaderProps = {
  setThemeState: Function | React.Dispatch<React.SetStateAction<string>>
}
export default function Header({ setThemeState }: HeaderProps) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  return (
    <>
      <HeaderStyled>
        <HeaderLogo src={LogoMobile} alt='mrLuisFer' />
        <HeaderMenuMobileIcon
          isOpenModal={isMenuModalOpen}
          src={MenuMobileIcon}
          alt='Menu'
          onClick={() => setIsMenuModalOpen(true)}
        />
        <Nav setThemeState={setThemeState} setIsMenuModalOpen={setIsMenuModalOpen} />
      </HeaderStyled>
      {isMenuModalOpen ? (
        <Modal htmlElement={menuMobilaModalId}>
          <MenuMobileModal setIsMenuModalOpen={setIsMenuModalOpen} />
        </Modal>
      ) : (
        ''
      )}
    </>
  )
}
