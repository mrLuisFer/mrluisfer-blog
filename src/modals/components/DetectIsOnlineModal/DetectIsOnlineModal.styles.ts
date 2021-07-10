import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  padding: 0.5em;
  border-radius: var(--radius);
`
