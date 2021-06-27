import Moon from 'src/assets/icons/moon-icon.svg'
import Bulb from 'src/assets/icons/bulb-icon.svg'

import {
  ThemeToggleStyled,
  ThemeToggleIcon,
  ThemeToggleText,
  ThemeToggleFlex,
} from './themeToggle.styles'
import { useContext } from 'react'
import { ThemeContext } from 'src/App/ThemeContext/ThemeContext'

export default function ThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  const handleDarkTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      localStorage.setItem('themeMode', 'dark')
    } else {
      localStorage.setItem('themeMode', 'light')
    }
  }

  return (
    <ThemeToggleStyled onClick={handleDarkTheme}>
      <ThemeToggleFlex
        title={isDarkMode ? 'Presiona para activar las luces' : 'Presiona para hacer de noche'}
      >
        <ThemeToggleIcon
          src={isDarkMode ? Bulb : Moon}
          alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        />
        <ThemeToggleText>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</ThemeToggleText>
      </ThemeToggleFlex>
    </ThemeToggleStyled>
  )
}
