import Moon from 'src/assets/icons/moon-icon.svg'
import Bulb from 'src/assets/icons/bulb-icon.svg'
import { ThemeStateFnuc } from 'src/types/setTheme'

import {
  ThemeToggleStyled,
  ThemeToggleIcon,
  ThemeToggleText,
  ThemeToggleFlex,
} from './themeToggle.styles'

export default function ThemeToggle({ setIsDarkMode, isDarkMode }: ThemeStateFnuc) {
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
      <ThemeToggleFlex>
        <ThemeToggleIcon
          src={isDarkMode ? Bulb : Moon}
          alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        />
        <ThemeToggleText>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</ThemeToggleText>
      </ThemeToggleFlex>
    </ThemeToggleStyled>
  )
}
