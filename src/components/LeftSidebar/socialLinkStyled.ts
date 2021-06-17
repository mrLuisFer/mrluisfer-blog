import { css } from 'styled-components'

export const socialLinkStyled = css`
  text-decoration: none;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  transition: var(--transition);
  margin: 0;
  font-weight: 500;
  color: ${(props) => props.theme.color};

  &:hover {
    background-color: var(--grey);
  }
`
