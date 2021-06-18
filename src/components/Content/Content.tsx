import { reactChildren } from 'src/types/reactChildren'
import { ContentStyled } from './content.styles'

export default function Content({ children }: reactChildren) {
  return <ContentStyled>{children}</ContentStyled>
}
