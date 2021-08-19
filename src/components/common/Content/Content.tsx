import { ContentStyled } from './content.styles'
import { reactChildren } from 'src/types/reactChildren'
import SendToTopBtn from 'src/components/SendToTopBtn'

export default function Content({ children }: reactChildren) {
  return (
    <ContentStyled>
      {children}
      <SendToTopBtn />
    </ContentStyled>
  )
}
