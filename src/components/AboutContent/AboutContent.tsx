import HeaderTitle from '../HeaderTitle/HeaderTitle'
import ContentText from './ContentText/ContentText'
import AboutMe from './AboutMe/AboutMe'

export default function AboutContent() {
  return (
    <div>
      <HeaderTitle titleText='About ✨' lineColor='var(--purple)' />
      <ContentText />
      <AboutMe />
    </div>
  )
}
