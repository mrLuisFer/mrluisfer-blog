import { MenuMobileContext } from './MenuMobileContext'
import { reactChildren } from 'src/types/reactChildren'
import { useState } from 'react'

export default function MenuMobileContextProvider({ children }: reactChildren) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  return (
    <MenuMobileContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuMobileContext.Provider>
  )
}
