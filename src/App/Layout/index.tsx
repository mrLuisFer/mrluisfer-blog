import { useScreenType } from 'src/hooks/useScreenType'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'
import { ThemeStateFnuc } from '../../types/setTheme'
import Routes from 'src/Routes/Routes'

import { GridLayoutDesktop } from './Layout.styles'

export default function Layout({ setIsDarkMode, isDarkMode }: ThemeStateFnuc) {
  const screenType = useScreenType()

  if (screenType === '3-cols') {
    return (
      <GridLayoutDesktop cols='3-cols'>
        <LeftSidebar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Routes />
        <RightSidebar />
      </GridLayoutDesktop>
    )
  } else if (screenType === '2-cols') {
    return (
      <GridLayoutDesktop cols='2-cols'>
        <LeftSidebar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Routes />
      </GridLayoutDesktop>
    )
  }

  return <Routes />
}
