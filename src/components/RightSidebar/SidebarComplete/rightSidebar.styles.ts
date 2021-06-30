import styled from 'styled-components'

export const RightSideTitle = styled.h2`
  text-align: center;
  margin-bottom: 0;
  opacity: 0.9;
  transition: var(--transition);
  font-weight: 600;

  &:hover {
    opacity: 1;
  }
`

export const SidebarCollapseIcon = styled.img`
  width: 30px;
`

export const SidebarCollapse = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  cursor: pointer;
  margin: 0 auto;
  opacity: 0;
  transition: var(--transition);
`

export const ContainerForHover = styled.div`
  &:hover {
    ${SidebarCollapse} {
      opacity: 1;
    }
  }
`
