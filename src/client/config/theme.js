import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export const ACCENT = '#e36a55';
export const AREA_TEXTO = '#61c785'
export const AREA_IMAGEM = '#8c4f9d'
export const AREA_CENA = '#33b2bc'
export const AREA_AUDIO = '#fbae18'
export const AREA_PRODUCAO = '#e36954'


export default getMuiTheme({
  fontFamily: 'inherit',
  palette: {
    primary1Color: ACCENT,
    primary2Color: 'green',
    primary3Color: 'blue',
    accent1Color: '#e36a55',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: 'white',
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#e36a55',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  raisedButton: {
    textColor: 'white',
  },
  button: {
    color: 'white',
  },
  appBar: {
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    height: 80,
    color: 'white',
  },
  tabs: {
    backgroundColor: 'white',
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    selectedTextColor: darkBlack,
  },
  tab: {
    textColor: darkBlack,
    alternateTextColor: darkBlack,
  },
  datePicker: {
    selectColor: ACCENT,
  },
});
