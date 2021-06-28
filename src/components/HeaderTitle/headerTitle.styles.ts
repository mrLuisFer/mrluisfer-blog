import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const HeaderTitleFlex = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`

type HeaderLineProps = {
  headerLineColor: string
}
export const HeaderLine = styled.div<HeaderLineProps>`
  height: 1.4rem;
  width: 0.3rem;
  display: block;
  background: ${(props) => props.headerLineColor};
  border-radius: var(--radius);
  margin-right: 0.5rem;
`

export const HeaderTitleStyled = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;

  @media (min-width: ${mediaQueries.md}) {
    font-size: 1.3rem;
  }
`
