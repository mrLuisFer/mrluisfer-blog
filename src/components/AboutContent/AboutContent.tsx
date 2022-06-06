import { cssVariables } from 'src/styles/utils/cssVariables'
import ContentText from './ContentText/ContentText'
import HeaderTitle from '../common/HeaderTitle/HeaderTitle'
import TypingEffect from 'src/components/common/TypingEffect/TypingEffect'
import AboutMe from './AboutMe'

export default function AboutContent() {
  return (
    <>
      <HeaderTitle titleText='About ✨' lineColor={cssVariables.purple} />
      <ContentText />
      <TypingEffect textWidth='16rem' text='📝 Informacion en crecimiento...' />
      <AboutMe />
    </>
  )
}
