import { useScreenType } from 'src/hooks/useScreenType'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import Content from 'src/components/Content/Content'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'

export default function Layout() {
  const screenType = useScreenType()

  if (screenType === '3-cols') {
    return (
      <>
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </>
    )
  } else if (screenType === '2-cols') {
    return (
      <>
        <LeftSidebar />
        <Content />
      </>
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
