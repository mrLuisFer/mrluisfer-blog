import { hoverStyle } from 'src/styles/utils/hoverStyle'
import { mediaQueries } from 'src/styles/mediaQueries'
import { userNoSelect } from 'src/styles/utils/userNoSelect'
import styled from 'styled-components'

type ThemeToggleStyledProps = {
  padding?: string
}
export const ThemeToggleStyled = styled.div<ThemeToggleStyledProps>`
  margin-top: 0.5rem;
  align-items: center;
  ${userNoSelect()};
  padding: ${(props) => props.padding || '0 25px'};
  cursor: pointer;

  @media (min-width: ${mediaQueries.lg}) {
    padding: 0 20px;
  }
`

export const ThemeToggleIcon = styled.img`
  width: 25px;
  height: 25px;
  transition: var(--transition);
`

export const ThemeToggleFlex = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 10px;
  transition: var(--transition);
  border-radius: var(--radius);

  ${hoverStyle()};

  &:hover {
    ${ThemeToggleIcon} {
      transform: scale(1.1);
    }
  }
`

export const ThemeToggleText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color};
  line-height: initial;
`
