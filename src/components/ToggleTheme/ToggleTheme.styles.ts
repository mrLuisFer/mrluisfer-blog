import styled from 'styled-components'
import { crater } from './utils/crater'

export const Wrapper = styled.div`
  padding-top: 40px;
  text-align: center;
`

export const Toggle = styled.div`
  border-radius: 40px;
  display: inline-block;
  padding: 4px;
  position: relative;
  width: 100px;

  &:before,
  &:after {
    content: '';
    display: table;
  }
`

export const ToggleBg = styled.div`
  background-color: #484848;
  border-radius: 40px;
  border: 4px solid #202020;
  height: 100%;
  left: -0.1px;
  position: absolute;
  top: 0px;
  transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 100%;
`

export const ToggleSwitch = styled.div`
  background-color: #fffdf2;
  border-radius: 50%;
  border: 4px solid #dee1c5;
  height: 40px;
  position: relative;
  transform: scale(1);
  transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 40px;
`

export const ToggleSwitchFigureAlt = styled.div`
  ${crater('2px', '2px', '0px')};
  transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(1);
  &:before {
    ${crater('-6px', '18px', '7px')};
  }

  &:after {
    ${crater('19px', '15px', '2px')};
  }
`

export const ToggleInput = styled.input`
  border-radius: 40px;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  &:checked ~ ${ToggleSwitch} {
    margin-left: 50px;

    background-color: #f5eb42;
    border: 4px solid #e4c74d;
  }

  &:checked ~ ${ToggleBg} {
    background-color: #c0e6f6;
    border: 4px solid #81c0d5;
  }

  &:checked ~ ${ToggleSwitch} ${ToggleSwitchFigureAlt} {
    transform: scale(0);
  }
`
