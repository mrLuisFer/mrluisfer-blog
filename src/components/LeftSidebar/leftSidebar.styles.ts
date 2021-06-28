import styled from 'styled-components'
import { mediaQueries } from 'src/styles/mediaQueries'

export const LeftSidebarTitle = styled.h1`
  display: inline-block;
  padding-left: 35px;
  padding-top: 20px;
  padding-right: 0.5rem;
  margin: 0;
  color: ${(props) => props.theme.color};
  position: relative;

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
