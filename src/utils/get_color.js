import {
  AREA_TEXTO,
  AREA_CENA
} from '../resources/colors'

export const getColorForArea = (area) => {
  switch (area) {
    case 'texto': return AREA_TEXTO;
    case 'imagem': return AREA_TEXTO;
    case 'audio': return AREA_TEXTO;
    case 'cena': return AREA_CENA;
    case 'producao': return AREA_TEXTO;
    default: return '#000'
  }
}
