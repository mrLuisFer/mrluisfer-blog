import { nanoid } from 'nanoid'
import react from 'src/assets/techIcons/react.svg'
import javascript from 'src/assets/techIcons/javascript.svg'

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
]
