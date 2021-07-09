import { useState } from 'react'
import { MenuMobileContext } from './MenuMobileContext'
import { reactChildren } from 'src/types/reactChildren'

export default function MenuMobileContextProvider({ children }: reactChildren) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  return (
    <MenuMobileContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuMobileContext.Provider>
  )
}
