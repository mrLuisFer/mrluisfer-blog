import { mediaQueries } from 'src/styles/mediaQueries'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.body};
  border-radius: var(--radius);
  position: relative;
  padding: 0.5rem 0;

  @media (min-width: ${mediaQueries.md}) {
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: space-around;
    max-width: 800px;
    margin: 1.5rem auto;
  }
`

export const Title = styled.h2`
  text-align: center;
  margin: 0;

  @media (min-width: ${mediaQueries.sm}) {
    font-size: 2rem;
  }

  @media (min-width: ${mediaQueries.md}) {
    font-size: 2.1rem;
  }
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
  user-select: none;

  @media (min-width: ${mediaQueries.md}) {
    width: 17em;
    height: 17em;
  }
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

  @media (min-width: ${mediaQueries.sm}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${mediaQueries.md}) {
    font-size: 1.5rem;
    max-width: 400px;
  }

  &:hover {
    opacity: 1;
  }
`
