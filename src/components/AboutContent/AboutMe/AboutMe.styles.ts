import { Button } from 'src/components/common/Button/Button.styles'
import { mediaQueries } from 'src/styles/mediaQueries'
import styled from 'styled-components'

export const AboutMeButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: 1rem auto;

  @media (min-width: ${mediaQueries.sm}) {
    width: 350px;
    font-size: 1.3rem;
  }

  @media (min-width: ${mediaQueries.md}) {
    display: block;
    margin: 1rem 0;
    width: 230px;
    font-size: 1.1rem;
  }
`
