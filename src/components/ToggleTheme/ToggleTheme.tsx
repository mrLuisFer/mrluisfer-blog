import { ChangeEvent } from 'react'
import {
  Wrapper,
  Toggle,
  ToggleBg,
  ToggleInput,
  ToggleSwitch,
  ToggleSwitchFigureAlt,
} from './ToggleTheme.styles'

type ToggleThemeProps = {
  setThemeState: Function | React.Dispatch<React.SetStateAction<string>>
}

export default function ToggleTheme({ setThemeState }: ToggleThemeProps) {
  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement> | any) => {
    const checked = event.target.checked
    console.log(checked)
    if (checked) {
      setThemeState('dark')
    } else {
      setThemeState('light')
    }
  }

  return (
    <Wrapper>
      <Toggle>
        <ToggleInput type='checkbox' onChange={handleChangeTheme} />
        <ToggleBg />
        <ToggleSwitch>
          <ToggleSwitchFigureAlt />
        </ToggleSwitch>
      </Toggle>
    </Wrapper>
  )
}
