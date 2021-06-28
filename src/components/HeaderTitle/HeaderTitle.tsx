import { HeaderTitleFlex, HeaderLine, HeaderTitleStyled } from './headerTitle.styles'

type HeaderTitleProps = {
  titleText: string
  lineColor?: string
}
export default function HeaderTitle({ titleText, lineColor = 'var(--blue)' }: HeaderTitleProps) {
  return (
    <HeaderTitleFlex>
      <HeaderLine headerLineColor={lineColor} />
      <HeaderTitleStyled>{titleText}</HeaderTitleStyled>
    </HeaderTitleFlex>
  )
}
