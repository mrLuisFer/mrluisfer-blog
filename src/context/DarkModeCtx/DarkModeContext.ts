import { createContext, Dispatch, SetStateAction } from 'react'

export interface DarkModeCtxValues {
  isDarkMode: boolean
  rightCompleteSidebar: boolean
  leftCompleteSidebar: boolean
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  setRightCompleteSidebar: Dispatch<SetStateAction<boolean>>
  setLeftCompleteSidebar: Dispatch<SetStateAction<boolean>>
}

const initialValue: DarkModeCtxValues = {
  isDarkMode: false,
  rightCompleteSidebar: true,
  leftCompleteSidebar: true,
  setLeftCompleteSidebar: () => {},
  setIsDarkMode: () => {},
  setRightCompleteSidebar: () => {},
}
export const DarkModeCtx = createContext<DarkModeCtxValues>(initialValue)
