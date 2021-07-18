import { cssVariables } from 'src/styles/utils/cssVariables'
import ContentText from './ContentText/ContentText'
import HeaderTitle from '../common/HeaderTitle/HeaderTitle'
import TypingEffect from 'src/components/common/TypingEffect/TypingEffect'

export default function AboutContent() {
  return (
    <div>
      <HeaderTitle titleText='About ✨' lineColor={cssVariables.purple} />
      <ContentText />
      <TypingEffect textWidth='18rem' text='📝 Informacion en mantenimiento...' />
    </div>
  )
}
