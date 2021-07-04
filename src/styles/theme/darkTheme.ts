import { Theme } from 'src/types/theme'
import { cssVariables } from '../utils/cssVariables'

const { darkGrey, lightGrey, darkSideLeftBg, hoverDark, scrollbarDark, dateDarkColor, grey } =
  cssVariables

export const darkTheme: Theme = {
  body: darkGrey,
  color: lightGrey,
  sidebar: darkSideLeftBg,
  hoverbg: hoverDark,
  scrollbar: scrollbarDark,
  lineSeparate: darkGrey,
  comingMsgBg: grey,
  comingMsgTxt: darkGrey,
  bgCard: darkSideLeftBg,
  dateColor: dateDarkColor,
}
