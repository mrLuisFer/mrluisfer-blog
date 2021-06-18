import styled from 'styled-components'

export const LeftSidebarStyled = styled.div`
  min-height: 100vh;
  height: 100%;
  box-shadow: 1px 0 10px var(--shadow-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  overflow-y: scroll;
  grid-area: left;
  background: ${(props) => props.theme.sl};

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: var(--radius);
    background: ${(props) => props.theme.scrollbar};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #767676;
  }
`

export const LeftSidebarTitle = styled.h1`
  display: inline-block;
  padding-left: 35px;
  padding-top: 20px;
  margin: 0;
  color: ${(props) => props.theme.color};

  span {
    color: var(--blue);
  }
`

type LineSeparateProps = {
  lineMargin?: string
}
export const LineSeparate = styled.div<LineSeparateProps>`
  background-color: ${(props) => props.theme.line_separate};
  height: 5px;
  width: 100%;
  margin: ${(props) => props.lineMargin || '0'};
`
