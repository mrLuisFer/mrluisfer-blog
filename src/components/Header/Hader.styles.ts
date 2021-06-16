import styled from 'styled-components'
import { paddingContainer } from '../../styles/utils/paddingContainer'
import { userNoSelect } from '../../styles/utils/userNoSelect'
import { noTapHightlight } from 'src/styles/utils/noTapHightlight'

export const HeaderStyled = styled.header`
  ${paddingContainer};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`

export const HeaderLogo = styled.img`
  ${userNoSelect};
  height: 30px;
`

type HeaderMenuMobileIconProps = {
  isOpenModal: Boolean
}

export const HeaderMenuMobileIcon = styled.img<HeaderMenuMobileIconProps>`
  ${noTapHightlight()};
  height: 20px;
  cursor: pointer;
  display: ${(props) => (props.isOpenModal ? 'none' : 'block')};
`
