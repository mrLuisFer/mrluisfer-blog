import { PropsWithChildren, useState } from 'react'
import LogoMobile from '../../assets/mobile/logo-mobile.svg'
import MenuMobileModal from '../MenuMobileModal/MenuMobileModal'
import { HeaderStyled, HeaderLogo } from './Hader.styles'
import Modal from '../Modal/Modal'
const menuMobilaModalId: HTMLElement = document.getElementById('menu-mobile-modal')!

export default function Header({ children }: JSX.ElementChildrenAttribute | PropsWithChildren<{}>) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  return (
    <>
      <HeaderStyled>
        <HeaderLogo src={LogoMobile} alt='mrLuisFer' />
        <>{children}</>
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
