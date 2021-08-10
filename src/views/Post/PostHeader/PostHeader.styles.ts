import { mediaQueries } from 'src/styles/mediaQueries'
import { userNoSelect } from 'src/styles/utils/userNoSelect'
import styled, { css } from 'styled-components'
import { cssVariables } from 'src/styles/utils/cssVariables'

type GoBackIconStyledProps = {
  isDarkMode: boolean
}

export const PostHeaderStyled = styled.div<GoBackIconStyledProps>`
  display: flex;
  column-gap: 1em;
  align-items: center;
  width: fit-content;
  padding: 0.1rem 0.5rem;
  border-radius: ${cssVariables.radius};
  
  &:hover {
    ${(props) =>
      props.isDarkMode
        ? css`
            background-color: ${(props) => props.theme.hoverbg};
          `
        : css`
            background-color: #fafafa;
          `}
`

export const GoBackIconStyled = styled.div`
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  ${userNoSelect()};
  }

  img {
    display: block;
    margin: auto;
    width: 0.9rem;
    height: 1.2rem;

    @media (min-width: ${mediaQueries.md}) {
      width: 1rem;
      height: 1.6rem;
    }
  }
`

export const GoBackTitle = styled.h2`
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.1px;
  font-size: 1.8rem;

  @media (min-width: ${mediaQueries.sm}) {
    font-size: 2rem;
  }
`
