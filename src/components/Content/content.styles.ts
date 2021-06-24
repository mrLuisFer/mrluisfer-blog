import styled from 'styled-components'

export const ContentStyled = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  grid-area: center;
  padding: 1rem 1.5rem;
`
