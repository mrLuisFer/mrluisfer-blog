import { Context } from 'src/context/Context'
import { useContext } from 'react'
import Bulb from 'src/assets/icons/bulb-icon.svg'
import Moon from 'src/assets/icons/moon-icon.svg'

import {
  ThemeToggleFlex,
  ThemeToggleIcon,
  ThemeToggleStyled,
  ThemeToggleText,
} from './themeToggle.styles'

export default function ThemeToggle({ customPadding }: { customPadding?: string }) {
  const { isDarkMode, setIsDarkMode } = useContext(Context)

  const handleDarkTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      localStorage.setItem('themeMode', 'light')
    } else {
      localStorage.setItem('themeMode', 'dark')
    }
  }

  return (
    <ThemeToggleStyled onClick={handleDarkTheme} padding={customPadding}>
      <ThemeToggleFlex
        title={isDarkMode ? 'Presiona para encender las luces' : 'Presiona para hacer de noche'}
      >
        <ThemeToggleIcon
          src={isDarkMode ? Bulb : Moon}
          alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          draggable='false'
        />
        <ThemeToggleText>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</ThemeToggleText>
      </ThemeToggleFlex>
    </ThemeToggleStyled>
  )
}
