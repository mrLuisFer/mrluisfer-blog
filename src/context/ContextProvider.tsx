import { useState } from 'react'
import { reactChildren } from 'src/types/reactChildren'
import { Context } from './Context'

export default function ContextProvider({ children }: reactChildren) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [completeSidebar, setCompleteSidebar] = useState<boolean>(true)

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode, completeSidebar, setCompleteSidebar }}>
      {children}
    </Context.Provider>
  )
}
