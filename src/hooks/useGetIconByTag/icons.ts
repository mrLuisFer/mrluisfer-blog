import { nanoid } from 'nanoid'
import react from 'src/assets/techIcons/react.svg'
import javascript from 'src/assets/techIcons/javascript.svg'
import css from 'src/assets/techIcons/css.svg'
import typescript from 'src/assets/techIcons/typescript.svg'

type TIcons = {
  iconName: string
  icon: string
  id: string | number
}

export const icons: Array<TIcons> = [
  {
    iconName: 'react',
    icon: react,
    id: nanoid(),
  },
  {
    iconName: 'javascript',
    icon: javascript,
    id: nanoid(),
  },
  {
    iconName: 'css',
    icon: css,
    id: nanoid(),
  },
  {
    iconName: 'typescript',
    icon: typescript,
    id: nanoid(),
  },
]
