import { Context } from './Context'
import { reactChildren } from 'src/types/reactChildren'
import { useState } from 'react'

export default function ContextProvider({ children }: reactChildren) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [rightCompleteSidebar, setRightCompleteSidebar] = useState<boolean>(true)

  return (
    <Context.Provider
      value={{ isDarkMode, setIsDarkMode, rightCompleteSidebar, setRightCompleteSidebar }}
    >
      {children}
    </Context.Provider>
  )
}
