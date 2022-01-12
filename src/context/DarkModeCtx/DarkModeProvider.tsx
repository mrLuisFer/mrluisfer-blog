import { DarkModeCtx } from './DarkModeContext'
import { useState } from 'react'

export default function DarkModeCtxProvider({ children }: { children: any }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [rightCompleteSidebar, setRightCompleteSidebar] = useState<boolean>(true)
  const [leftCompleteSidebar, setLeftCompleteSidebar] = useState<boolean>(true)

  return (
    <DarkModeCtx.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        rightCompleteSidebar,
        setRightCompleteSidebar,
        leftCompleteSidebar,
        setLeftCompleteSidebar,
      }}
    >
      {children}
    </DarkModeCtx.Provider>
  )
}
