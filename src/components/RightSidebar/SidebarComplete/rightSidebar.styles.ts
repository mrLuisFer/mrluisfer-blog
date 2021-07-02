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

  &:hover {
    transition: var(--transition);
    transform: scale(1.05);
  }
`

export const SidebarCollapse = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 0.7rem;
  cursor: pointer;
  margin: 0 auto;
  width: fit-content;
  padding: 0.2rem 0.8rem;
  border-radius: var(--radius);
  opacity: 0;
  transition: var(--transition);
  margin-top: 1rem;

  &:hover {
    background: ${(props) => props.theme.hoverbg};
    opacity: 0.95;
  }

  p {
    font-weight: 500;
  }
`

export const ContainerForHover = styled.div`
  &:hover {
    ${SidebarCollapse} {
      opacity: 0.8;
    }
  }
`
