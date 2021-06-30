import { createContext, useState } from 'react'
import { reactChildren } from 'src/types/reactChildren'

export const ThemeContext = createContext<any>(null)

export default function ThemeContextProvider({ children }: reactChildren) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [completeSidebar, setCompleteSidebar] = useState<boolean>(true)

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setIsDarkMode, completeSidebar, setCompleteSidebar }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
