import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: block;
`

const typing = keyframes`
  from {
    width: 0
  }
`

const blink = keyframes`
  50% {
    border-color: transparent
  }
`

type TypingProps = {
  textWidth: string
}
export const Typing = styled.div<TypingProps>`
  width: ${(props) => props.textWidth};
  animation: ${typing} 1s steps(22), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  font-size: 1em;
  margin: 0.8rem 0;
`
