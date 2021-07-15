import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const MobileMenuStyled = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2rem;
`

const commonLinkStyle = css`
  text-decoration: none;
  color: ${(props) => props.theme.color};
  display: inline-block;
  padding: 0.7rem 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: var(--radius);

  &:hover {
    color: var(--blue);
    border: 1px solid var(--purple);
  }
`

export const LinkStyled = styled(Link)`
  ${commonLinkStyle}
`

export const AnchorStyled = styled.a`
  ${commonLinkStyle}
`
