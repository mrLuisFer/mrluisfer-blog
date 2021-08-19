import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { hoverStyle } from 'src/styles/utils/hoverStyle'
import { cssVariables } from 'src/styles/utils/cssVariables'

export const SidebarListItem = styled.li`
  margin: 1.5rem 0;
`

const commontLinkStyles = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${cssVariables.radius};
  ${hoverStyle()};
  padding: 0.9rem;
  width: fit-content;
  margin: 0 auto;
`

export const SidebarLink = styled(Link)`
  ${commontLinkStyles()};
`

export const SidebarAnchor = styled.a`
  ${commontLinkStyles()};
`

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`
