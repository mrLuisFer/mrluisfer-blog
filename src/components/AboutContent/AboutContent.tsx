import { cssVariables } from 'src/styles/utils/cssVariables'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import ContentText from './ContentText/ContentText'
// import AboutMe from './AboutMe/AboutMe'
import TypingEffect from 'src/components/TypingEffect/TypingEffect'

export default function AboutContent() {
  return (
    <div>
      <HeaderTitle titleText='About ✨' lineColor={cssVariables.purple} />
      <ContentText />
      <TypingEffect textWidth='18rem' text='📝 Informacion en mantenimiento...' />
    </div>
  )
}
