import React from 'react';

import { AREA_TEXTO, AREA_CENA } from '../colors';
import { Texto,
Imagem,
Audio,
Cena,
Producao } from '../icons'

export const areas = [{
  value: 'texto',
  label: 'Texto',
  funcoes: [{
      value: 'historia',
      label: 'História'
    },
    {
      value: 'roteirista',
      label: 'Roteirista'
    },
    {
      value: 'tradutor',
      label: 'Tradutor'
    },
  ],
}, {
  value: 'cena',
  label: 'Cena',
  funcoes: [{
      value: 'ator',
      label: 'Ator'
    },
    {
      value: 'atriz',
      label: 'Atriz'
    },
    {
      value: 'figurante',
      label: 'Figurante'
    },
    {
      value: 'diretor-de-casting',
      label: 'Diretor de Casting'
    },
  ],
}]
