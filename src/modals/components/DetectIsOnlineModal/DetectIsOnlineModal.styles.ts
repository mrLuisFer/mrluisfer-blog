import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  padding: 0.5em;
  border-radius: var(--radius);
`

export const ModalImg = styled.img`
  width: 15em;
  display: block;
  height: 15em;
  margin: 0 auto;
  background: #000;
  border-radius: var(--radius);
`
