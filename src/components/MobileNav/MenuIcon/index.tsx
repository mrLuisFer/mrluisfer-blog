import CloseMenuIconComponent from './CloseMenuIconComponent'
import MenuIconComponent from './MenuIconComponent'
import { useDarkMode } from 'src/hooks/useDarkMode'
import { useMenuMobileContext } from 'src/context/MenuMobileContext'

export default function MenuIcon() {
  const { isDarkMode } = useDarkMode()
  const { isOpenMenu } = useMenuMobileContext()

  return (
    <>
      {isOpenMenu ? (
        <CloseMenuIconComponent isDarkMode={isDarkMode} />
      ) : (
        <MenuIconComponent isDarkMode={isDarkMode} />
      )}
    </>
  )
}
