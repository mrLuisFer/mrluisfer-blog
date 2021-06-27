import { useScreenType } from 'src/hooks/useScreenType'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'
import Routes from 'src/Routes/Routes'

import { GridLayoutDesktop } from './Layout.styles'

export default function Layout() {
  const screenType = useScreenType()

  if (screenType === '3-cols') {
    return (
      <GridLayoutDesktop cols='3-cols'>
        <LeftSidebar />
        <Routes />
        <RightSidebar />
      </GridLayoutDesktop>
    )
  } else if (screenType === '2-cols') {
    return (
      <GridLayoutDesktop cols='2-cols'>
        <LeftSidebar />
        <Routes />
      </GridLayoutDesktop>
    )
  }

  return <Routes />
}
