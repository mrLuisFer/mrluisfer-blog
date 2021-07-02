import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from 'src/context/Context'
import GoBackIconBlue from 'src/assets/icons/goBack/back-blue.svg'
import GoBackIconGreen from 'src/assets/icons/goBack/back-green.svg'
import { PostHeaderStyled, GoBackIconStyled, GoBackTitle } from './PostHeader.styles'

type Props = {
  title: string
}
export default function PostHeader({ title }: Props) {
  const { isDarkMode } = useContext(Context)
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
        isDarkMode={isDarkMode}
      >
        <img src={isDarkMode ? GoBackIconGreen : GoBackIconBlue} draggable='false' alt='Volver' />
      </GoBackIconStyled>
      <GoBackTitle>{title}</GoBackTitle>
    </PostHeaderStyled>
  )
}
