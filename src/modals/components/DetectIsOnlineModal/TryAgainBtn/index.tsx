import { TryAgainBtnStyled } from './TryAgainBtn.styles'

export default function TryAgainBtn() {
  const handleClickReload = () => location.reload()

  return (
    <TryAgainBtnStyled type='button' onClick={handleClickReload}>
      Try Again
    </TryAgainBtnStyled>
  )
}
