import React from 'react'

import { getColorForArea } from '@utils/get_color'
import { Texto, Imagem, Audio, Cena, Producao,
  ExisteOficial,
  Independente,
  Empresarial,
  Troca,
} from '@resources/icons';

export default (area, colored) => {
  const color = colored ?
    getColorForArea(area) :
    ''
  switch (area) {
    case 'texto': return <Texto color={color} />;
    case 'imagem': return <Imagem color={color} />;
    case 'audio': return <Audio color={color} />;
    case 'cena': return <Cena color={color} />;
    case 'producao': return <Producao color={color} />;
    default: return <span />
  }
}


export const getIconParaCategoria = (categoria) => {
  switch (categoria) {
    case 'oficial': return <ExisteOficial />
    case 'independente': return <Independente />
    case 'empresarial': return <Empresarial />
    case 'troca': return <Troca />
    default: return <ExisteOficial />
  }
}
