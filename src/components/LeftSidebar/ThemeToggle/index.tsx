import { useContext } from 'react'
import { DarkModeCtx } from 'src/context/DarkModeCtx/DarkModeContext'
import Bulb from 'src/assets/icons/bulb-icon.svg'
import Moon from 'src/assets/icons/moon-icon.svg'

import {
  ThemeToggleFlex,
  ThemeToggleIcon,
  ThemeToggleStyled,
  ThemeToggleText,
} from './themeToggle.styles'

type ThemeToggleProps = {
  customPadding?: string
}

export default function ThemeToggle({ customPadding }: ThemeToggleProps) {
  const { isDarkMode, setIsDarkMode, leftCompleteSidebar } = useContext(DarkModeCtx)

  const handleDarkTheme = () => {
    setIsDarkMode(!isDarkMode)

    localStorage.setItem('themeMode', isDarkMode ? 'light' : 'dark')
  }

  return (
    <ThemeToggleStyled onClick={handleDarkTheme} padding={customPadding}>
      <ThemeToggleFlex
        leftCompleteSidebar={leftCompleteSidebar}
        title={isDarkMode ? 'Presiona para encender las luces' : 'Presiona para hacer de noche'}
      >
        <ThemeToggleIcon
          src={isDarkMode ? Bulb : Moon}
          alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          draggable='false'
        />
        {leftCompleteSidebar && (
          <ThemeToggleText>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</ThemeToggleText>
        )}
      </ThemeToggleFlex>
    </ThemeToggleStyled>
  )
}
