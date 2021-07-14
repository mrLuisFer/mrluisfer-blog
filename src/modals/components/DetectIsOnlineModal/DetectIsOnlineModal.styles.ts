import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.body};
  border-radius: var(--radius);
  position: relative;
  padding: 0.5rem 0;
`

export const Title = styled.h2`
  text-align: center;
  margin: 0;
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

type TTextProps = {
  opacity?: number
}
export const Text = styled.p<TTextProps>`
  padding: 0.5em;
  margin: 0;
  text-align: center;
  opacity: ${(props) => props.opacity || 1};
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }
`
