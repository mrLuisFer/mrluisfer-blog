import { Theme } from 'src/types/theme'
import { cssVariables } from '../utils/cssVariables'

const { grey, darkGrey, lightGrey, hoverLight, scrollbarLight, dateColor } = cssVariables

export const lightTheme: Theme = {
  body: grey,
  color: darkGrey,
  sidebar: lightGrey,
  hoverbg: hoverLight,
  scrollbar: scrollbarLight,
  lineSeparate: grey,
  comingMsgBg: darkGrey,
  comingMsgTxt: lightGrey,
  bgCard: lightGrey,
  dateColor: dateColor,
}
