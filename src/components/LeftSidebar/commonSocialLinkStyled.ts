import { css } from 'styled-components'
import { hoverStyle } from 'src/styles/utils/hoverStyle'
import { userNoSelect } from 'src/styles/utils/userNoSelect'

type TypeSocialLinkFw = {
  fontWeight: string
}

export const socialLinkStyled = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  transition: var(--transition);
  margin: 0;
  font-weight: ${(props: TypeSocialLinkFw) => props.fontWeight || '500'};
  color: ${(props) => props.theme.color};

  ${userNoSelect()};
  ${hoverStyle()};
`
