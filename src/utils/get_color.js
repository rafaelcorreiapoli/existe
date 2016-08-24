import {
  AREA_TEXTO,
  AREA_IMAGEM,
  AREA_AUDIO,
  AREA_CENA,
  AREA_PRODUCAO
} from '../resources/colors'

export const getColorForArea = (area) => {
  switch (area) {
    case 'texto': return AREA_TEXTO;
    case 'imagem': return AREA_IMAGEM;
    case 'audio': return AREA_AUDIO;
    case 'cena': return AREA_CENA;
    case 'producao': return AREA_PRODUCAO;
    default: return '#000'
  }
}
