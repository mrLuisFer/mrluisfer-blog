import { Dispatch, SetStateAction } from 'react'

export type ThemeStateFnuc = {
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  isDarkMode: boolean | Boolean
}
