import { cssVariables } from 'src/styles/utils/cssVariables'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import ContentText from './ContentText/ContentText'
// import AboutMe from './AboutMe/AboutMe'

export default function AboutContent() {
  return (
    <div>
      <HeaderTitle titleText='About ✨' lineColor={cssVariables.purple} />
      <ContentText />
      <p>📝 Informacion en mantenimiento...</p>
    </div>
  )
}
