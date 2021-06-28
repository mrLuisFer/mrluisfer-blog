import styled from 'styled-components'
import { userNoSelect } from 'src/styles/utils/userNoSelect'
import { hoverStyle } from 'src/styles/utils/hoverStyle'
import { mediaQueries } from 'src/styles/mediaQueries'

export const ThemeToggleStyled = styled.div`
  margin-top: 0.5rem;
  align-items: center;
  ${userNoSelect()};
  padding: 0 25px;
  cursor: pointer;

  @media (min-width: ${mediaQueries.lg}) {
    padding: 0 20px;
  }
`

export const ThemeToggleFlex = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 10px;
  transition: var(--transition);
  border-radius: var(--radius);

  ${hoverStyle()};
`

export const ThemeToggleIcon = styled.img`
  width: 25px;
  height: 25px;
`

export const ThemeToggleText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color};
`
