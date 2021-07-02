import { useHistory } from 'react-router-dom'
import GoBackIconDark from 'src/assets/icons/goBack/back-dark.svg'
import { PostHeaderStyled, GoBackIconStyled, GoBackTitle } from './PostHeader.styles'

type Props = {
  title: string
}
export default function PostHeader({ title }: Props) {
  const history = useHistory()

  const handleClickGoBackPage = () => {
    history.goBack()
  }

  return (
    <PostHeaderStyled>
      <GoBackIconStyled
        onClick={handleClickGoBackPage}
        aria-hidden='true'
        title='Volver para atras...'
      >
        <img src={GoBackIconDark} width={15} height={25} />
      </GoBackIconStyled>
      <GoBackTitle>{title}</GoBackTitle>
    </PostHeaderStyled>
  )
}
