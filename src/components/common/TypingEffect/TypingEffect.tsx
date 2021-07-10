import { Wrapper, Typing } from './TypingEffect.styles'

type TypingEffectProps = {
  text: string
  textWidth: string
}
export default function TypingEffect({ text, textWidth }: TypingEffectProps) {
  return (
    <Wrapper>
      <Typing textWidth={textWidth}>{text}</Typing>
    </Wrapper>
  )
}
