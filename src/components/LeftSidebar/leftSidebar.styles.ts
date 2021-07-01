import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mediaQueries } from 'src/styles/mediaQueries'
import { userNoSelect } from 'src/styles/utils/userNoSelect'

export const LeftSidebarTitle = styled(Link)`
  display: inline-block;
  padding-left: 35px;
  padding-right: 0.5rem;
  margin: 0;
  margin-top: 20px;
  color: ${(props) => props.theme.color};
  position: relative;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  ${userNoSelect()};

  @media (min-width: ${mediaQueries.lg}) {
    padding-left: 30px;
  }

  &::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: var(--blue);
    z-index: -1;
    opacity: 0.4;
    border-radius: 0 var(--radius) var(--radius) 0;
    transition: transform 0.3s ease;
  }

  span {
    color: var(--blue);
  }
`
