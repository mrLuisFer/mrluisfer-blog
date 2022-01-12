import { useContext } from 'react'
import { DarkModeCtx, DarkModeCtxValues } from 'src/context/DarkModeCtx/DarkModeContext'

export const useDarkMode = (): DarkModeCtxValues => {
  return useContext(DarkModeCtx)
}
