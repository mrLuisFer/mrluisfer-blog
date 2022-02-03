import { nanoid } from 'nanoid'
import { useScreenType } from 'src/hooks/useScreenType'
import { useDarkMode } from 'src/hooks/useDarkMode'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'
import MenuMobileContextProvider from 'src/context/MenuMobileContext'
import Routes from 'src/Routes/Routes'
import MobileLayout from './MobileLayout'
import { GridLayoutDesktop } from './Layout.styles'

export default function Layout() {
  const screenType: string = useScreenType()

  const { rightCompleteSidebar, leftCompleteSidebar } = useDarkMode()

  if (screenType === '3-cols') {
    return (
      <GridLayoutDesktop
        cols='3-cols'
        completeRightSide={rightCompleteSidebar}
        leftCompleteSidebar={leftCompleteSidebar}
      >
        <LeftSidebar key={nanoid()} />
        <Routes />
        <RightSidebar key={nanoid()} />
      </GridLayoutDesktop>
    )
  } else if (screenType === '2-cols') {
    return (
      <GridLayoutDesktop
        cols='2-cols'
        completeRightSide={rightCompleteSidebar}
        leftCompleteSidebar={leftCompleteSidebar}
      >
        <LeftSidebar key={nanoid()} />
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
