import { ThemeStateFnuc } from 'src/App/setTheme'
import Moon from 'src/assets/icons/moon-icon.svg'
import Bulb from 'src/assets/icons/bulb-icon.svg'
import { ThemeToggleStyled, ThemeToggleIcon, ThemeToggleText } from './themeToggle.styles'

export default function ThemeToggle({ setIsDarkMode, isDarkMode }: ThemeStateFnuc) {
  const handleDarkTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeToggleStyled onClick={handleDarkTheme}>
      <ThemeToggleIcon
        src={isDarkMode ? Bulb : Moon}
        alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
      />
      <ThemeToggleText>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</ThemeToggleText>
    </ThemeToggleStyled>
  )
}
