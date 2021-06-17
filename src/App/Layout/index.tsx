import { useScreenType } from 'src/hooks/useScreenType'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import Content from 'src/components/Content/Content'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'

import { GridLayoutDesktop } from './Layout.styles'

export default function Layout() {
  const screenType = useScreenType()

  if (screenType === '3-cols') {
    return (
      <GridLayoutDesktop cols='3-cols'>
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </GridLayoutDesktop>
    )
  } else if (screenType === '2-cols') {
    return (
      <GridLayoutDesktop cols='2-cols'>
        <LeftSidebar />
        <Content />
      </GridLayoutDesktop>
    )
  } else if (screenType === '1-cols') {
    return <Content />
  }

  return (
    <>
      <Content />
    </>
  )
}
