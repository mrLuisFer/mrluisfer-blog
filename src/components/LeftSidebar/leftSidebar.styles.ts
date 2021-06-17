import styled from 'styled-components'

export const LeftSidebarStyled = styled.div`
  position: relative;
  background-color: var(--light-grey);
  min-height: 100vh;
  box-shadow: 1px 0 10px var(--shadow-color);
`

export const LeftSidebarTitle = styled.h1`
  display: inline-block;
  padding-left: 35px;
  padding-top: 20px;
  margin: 0;
  color: ${(props) => props.theme.color};

  span {
    color: var(--blue);
  }
`
