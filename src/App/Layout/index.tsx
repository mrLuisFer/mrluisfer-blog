import { useContext } from 'react'
import { useScreenType } from 'src/hooks/useScreenType'
import { Context } from 'src/context/Context'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'
import Routes from 'src/Routes/Routes'
import MobileLayout from './MobileLayout'
import { GridLayoutDesktop } from './Layout.styles'
import MenuMobileContextProvider from 'src/context/MenuMobileContext/MenuMobileContextProvider'

export default function Layout() {
  const screenType = useScreenType()

  const { completeSidebar } = useContext(Context)

  if (screenType === '3-cols') {
    return (
      <GridLayoutDesktop cols='3-cols' completeRightSide={completeSidebar}>
        <LeftSidebar />
        <Routes />
        <RightSidebar />
      </GridLayoutDesktop>
    )
  } else if (screenType === '2-cols') {
    return (
      <GridLayoutDesktop cols='2-cols' completeRightSide={completeSidebar}>
        <LeftSidebar />
        <Routes />
      </GridLayoutDesktop>
    )
  }

  return (
    <MenuMobileContextProvider>
      <MobileLayout />
    </MenuMobileContextProvider>
  )
}
