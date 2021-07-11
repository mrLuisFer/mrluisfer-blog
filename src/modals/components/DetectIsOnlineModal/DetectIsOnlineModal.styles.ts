import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  border-radius: var(--radius);
  position: relative;
`

const action = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`
export const ModalImgContainer = styled.div`
  background: rgb(0, 0, 0);
  border-radius: var(--radius) var(--radius) 0 0;
  width: 100%;
`

export const ModalImg = styled.img`
  -webkit-animation: ${action} 2s infinite alternate;
  display: block;
  margin: 0 auto;
  animation: ${action} 2s infinite alternate;
  width: 15em;
  height: 15em;
`

export const TextContainer = styled.div`
  padding: 0.5em;
`
