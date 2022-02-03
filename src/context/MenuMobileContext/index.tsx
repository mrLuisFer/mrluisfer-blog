import { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'
import { reactChildren } from 'src/types/reactChildren'

interface IMenuMobileContext {
  isOpenMenu: boolean
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const MenuMobileContext = createContext<IMenuMobileContext>({
  isOpenMenu: false,
  setIsOpenMenu: (state) => state,
})

export default function MenuMobileContextProvider({ children }: reactChildren) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const objValue: IMenuMobileContext = { isOpenMenu, setIsOpenMenu }

  return <MenuMobileContext.Provider value={objValue}>{children}</MenuMobileContext.Provider>
}

export const useMenuMobileContext = (): IMenuMobileContext => {
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuMobileContext)
  if (isOpenMenu === undefined && setIsOpenMenu === undefined) {
    throw new Error('useSidebarTitlesCtx must be used within a SidebarTitlesCtxProvider')
  } else {
    return { isOpenMenu, setIsOpenMenu }
  }
}
