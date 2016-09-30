import React from 'react'
import {
  Todos,
  ExisteOficial,
  Independente,
  Empresarial,
  Troca,
  Data,
  Trending,
  Usuarios,
  ComVagas,
  Likes,
} from '@resources/icons';

export const AREAS_E_FUNCOES = [{
  value: 'texto',
  label: 'Texto',
  funcoes: [{
    value: 'historia',
    label: 'História',
  },
    {
      value: 'roteirista',
      label: 'Roteirista',
    },
    {
      value: 'tradutor',
      label: 'Tradutor',
    },
],
}, {
  value: 'imagem',
  label: 'Imagem',
  funcoes: [
    {
      value: 'diretor-de-cena',
      label: 'Diretor de cena',
    },
    {
      value: 'assistente-de-direcao',
      label: 'Assistente de Direção',
    },
    {
      value: 'diretor-de-fotografia',
      label: 'Diretor de fotografia',
    },
    {
      value: 'assistente-de-fotografia',
      label: 'Assistente de fotografia',
    },
    {
      value: 'operador-de-camera',
      label: 'Operador de câmera',
    },
    {
      value: 'assistente-de-camera',
      label: 'Assistente de câmera',
    },
    {
      value: 'assistente-de-iluminacao',
      label: 'Assistente de iluminação',
    },
    {
      value: 'operador-de-steadycam',
      label: 'Operador de steadycam',
    },
    {
      value: 'fotografo',
      label: 'Fotógrafo',
    },
    {
      value: 'diretor-de-arte',
      label: 'Diretor de arte',
    },
    {
      value: 'cenografo',
      label: 'Cenógrafo',
    },
    {
      value: 'editor-de-video',
      label: 'Editor de vídeo',
    },
    {
      value: 'colorista',
      label: 'Colorista',
    },
    {
      value: 'designer-grafico',
      label: 'Designer gráfico',
    },
    {
      value: 'desenhista-de-stoyboard',
      label: 'Desenhista de storyboard',
    },
    {
      value: 'animador',
      label: 'Animador',
    },
  ],
}, {
  value: 'audio',
  label: 'Áudio',
  funcoes: [
    {
      value: 'tecnico-de-som-direto',
      label: 'Técnico de som direto',
    },
    {
      value: 'microfonista',
      label: 'Microfonista',
    },
    {
      value: 'assistente-de-som',
      label: 'Assistente de som',
    },
    {
      value: 'editor-de-som',
      label: 'Editor de som',
    },
    {
      value: 'mixador',
      label: 'Mixador',
    },
    {
      value: 'assistente-de-mixagem',
      label: 'Assistente de mixagem',
    },
    {
      value: 'compositor-de-trilha',
      label: 'Compositor de trilha',
    },
    {
      value: 'locutor',
      label: 'Locutor',
    },
    {
      value: 'banda',
      label: 'Banda',
    },
    {
      value: 'dublador',
      label: 'Dublador',
    },
  ],
}, {
  value: 'cena',
  label: 'Cena',
  funcoes: [{
    value: 'ator',
    label: 'Ator',
  },
    {
      value: 'atriz',
      label: 'Atriz',
    },
    {
      value: 'figurante',
      label: 'Figurante',
    },
    {
      value: 'diretor-de-casting',
      label: 'Diretor de Casting',
    },
],
}, {
  value: 'producao',
  label: 'Produção',
  funcoes: [{
    value: 'produtor',
    label: 'Produtor',
  },
    {
      value: 'assistente-de-producao',
      label: 'Assistente de Produção',
    },
    {
      value: 'assistente-de-locacao',
      label: 'Assistente de locação',
    },
    {
      value: 'continuista',
      label: 'Continuísta',
    },
    {
      value: 'figurinista',
      label: 'Figurinista',
    },
    {
      value: 'cabeleireiro',
      label: 'Cabeleireiro',
    },
    {
      value: 'maquiador',
      label: 'Maquiador',
    },
    {
      value: 'eletricista',
      label: 'Eletricista',
    },
],
}]

export const FILTRO_TIMES = [
  {
    label: 'Produtora',
    value: 'produtora',
  },
  {
    label: 'Agência',
    value: 'agencia',
  },
  {
    label: 'Coletivo',
    value: 'coletivo',
  },
  {
    label: 'Time de profissionais independentes',
    value: 'time-de-profissionais-independentes',
  },
]
export const TIPOS_EMPRESA = [
  {
    label: 'Produtora',
    value: 'produtora',
  },
  {
    label: 'Agência',
    value: 'agencia',
  },
  {
    label: 'E-commerce',
    value: 'e-commerce',
  },
  {
    label: 'Startup',
    value: 'startup',
  },
  {
    label: 'Hotel',
    value: 'hotel',
  },
  {
    label: 'Restaurante',
    value: 'restaurante',
  },
  {
    label: 'Fábrica',
    value: 'fabrica',
  },
  {
    label: 'Consultório',
    value: 'consultorio',
  },
  {
    label: 'Coletivo',
    value: 'coletivo',
  },
  {
    label: 'Outro',
    value: 'outro',
  },
]
export const EXPRESSOES_ARTISTICAS = [
  {
    label: 'Minimalismo',
    value: 'minimalismo',
  },
  {
    label: 'Realismo',
    value: 'realismo',
  },
  {
    label: 'Expressionismo',
    value: 'expressionismo',
  },
  {
    label: 'Surrealismo',
    value: 'surrealismo',
  },
  {
    label: 'Pontilhismo',
    value: 'pontilhismo',
  },
  {
    label: 'Abstracionismo',
    value: 'abstracionismo',
  },
  {
    label: 'Cubismo',
    value: 'cubismo',
  },
  {
    label: 'Outro',
    value: 'outro',
  },
]

export const PAGAMENTO_PREFERENCIAL = [
  {
    label: 'Pagamento 1',
    value: 'pagamento-1',
  },
  {
    label: 'Pagamento 2',
    value: 'pagamento-2',
  },
]

export const COR_OLHOS = [
  {
    label: 'Azul',
    value: 'azul',
  },
  {
    label: 'Castanho',
    value: 'castanho',
  },
  {
    label: 'Preto',
    value: 'preto',
  },
  {
    label: 'Verde',
    value: 'verde',
  },
]

export const COR_CABELOS = [
  {
    label: 'Castanho claro',
    value: 'castanho-claro',
  },
  {
    label: 'Castanho escuro',
    value: 'castranho-escuro',
  },
  {
    label: 'Loiro',
    value: 'loiro',
  },
  {
    label: 'Preto',
    value: 'preto',
  },
  {
    label: 'Ruivo',
    value: 'ruivo',
  },
]

export const FILTRO_CATEGORIAS = [
  {
    label: 'TODOS',
    icon: <Todos />,
    value: 'todos',
  },
  {
    label: 'EXISTE OFICIAL',
    icon: <ExisteOficial />,
    value: 'oficial',
  },
  {
    label: 'EXISTE INDEPENDENTE',
    icon: <Independente />,
    value: 'independente',
  },
  {
    label: 'EXISTE EMPRESARIAL',
    icon: <Empresarial />,
    value: 'empresarial',
  },
  {
    label: 'EXISTE TROCA',
    icon: <Troca />,
    value: 'troca',
  }]

export const FILTRO_SUBCATEGORIAS = [
  {
    label: 'LONGA',
    value: 'longa',
  },
  {
    label: 'CURTA',
    value: 'curta',
  },
  {
    label: 'DOCUMENTÁRIO',
    value: 'documentario',
  },
  {
    label: 'SÉRIE',
    value: 'serie',
  },
  {
    label: 'MINI-DOC',
    value: 'mini-doc',
  },
  {
    label: 'INSTITUCIONAL',
    value: 'institucional',
  },
  {
    label: 'COMERCIAL',
    value: 'comercial',
  },
  {
    label: 'TRAILER',
    value: 'trailer',
  },
  {
    label: 'TEASER',
    value: 'teaser',
  },
  {
    label: 'CLIPE',
    value: 'clipe',
  },
  {
    label: 'ENTREVISTA',
    value: 'entrevista',
  },
  {
    label: 'MAKING OF',
    value: 'making-of',
  },
  {
    label: 'OUTROS',
    value: 'outros',
  },
]
export const FILTRO_ORDEM = [{
  icon: <Data />,
  label: 'MAIS RECENTES',
  value: 'recentes',
},
  {
    icon: <Trending />,
    label: 'TRENDING',
    value: 'trending',
  },
  {
    icon: <Usuarios />,
    label: 'MAIS SEGUIDOS',
    value: 'seguidores',
  },
  {
    icon: <Likes />,
    label: 'MAIS CURTIDOS',
    value: 'curtidas',
  },
  {
    icon: <ComVagas />,
    label: 'COM VAGAS',
    value: 'vagas',
  }];
