import styled from 'styled-components'

export const RightSidebarStyled = styled.div`
  position: fixed;
  background-color: var(--light-grey);
  min-height: 100vh;
  box-shadow: -1px 0 10px var(--shadow-color);
  top: 0;
  right: 0;
  width: 290px;
  grid-area: right;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.sidebar};
`

export const RightSideTitle = styled.h2`
  text-align: center;
  margin-top: 4.5rem;
  opacity: 0.9;
  transition: var(--transition);
  font-weight: 600;

  &:hover {
    opacity: 1;
  }
`
