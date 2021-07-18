import { ContentStyled } from './content.styles'
import { reactChildren } from 'src/types/reactChildren'

export default function Content({ children }: reactChildren) {
  return <ContentStyled>{children}</ContentStyled>
}
