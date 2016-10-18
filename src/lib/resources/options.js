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
  ] },
  // {
  //   value: undefined,
  //   label: 'Todos',
  // },
]

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
    value: undefined,
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


export const OPCOES_MEIOS_VEICULACAO = [
  {
    label: 'TV',
    value: 'tv',
  },
  {
    label: 'TV interna',
    value: 'tv-interna',
  },
  {
    label: 'DVD',
    value: 'dvd',
  },
  {
    label: 'Blu-ray',
    value: 'blu-ray',
  },
  {
    label: 'Cinema',
    value: 'cinema',
  },
  {
    label: 'Internet',
    value: 'internet',
  },
]

export const OPCOES_OBJETIVOS_EMPRESARIAL = [
  {
    label: 'Comunicação Interna',
    value: 'rafa',
  }, {
    label: 'Comunicação Corporativa',
    value: 'comunicacao-corporativa',
  }, {
    label: 'Gerar Leads',
    value: 'gerar-leads',
  }, {
    label: 'Posicionamento de Marca',
    value: 'posicionamento-de-marca',
  }, {
    label: 'Aumento das Vendas',
    value: 'aumento-das-vendas',
  }, {
    label: 'Lançamento de produto e/ou coleção',
    value: 'lancamento-produto-colecao',
  }, {
    label: 'Divulgação da Marca',
    value: 'divulgacao-da-marca',
  }, {
    label: 'Divulgação de produto e/ou coleção',
    value: 'divulgacao-de-produto-colecao',
  }, {
    label: 'Divulgar promoção',
    value: 'divulgar-promocao',
  }, {
      label: 'Divulgar ação de Marketing',
      value: 'divulgar-acao-de-marketing',
    }, {
      label: 'Endomarketing',
      value: 'endomarketing',
    }, {
      label: 'Outro',
      value: 'outro',
    },
]

export const OPCOES_OBJETIVOS_INDEPENDENTE = [
  {
    label: 'Demo Reel',
    value: 'demo-reel',
  },
  {
    label: 'Entretenimento',
    value: 'entretenimento',
  },
  {
    label: 'Promover Cultura e Arte',
    value: 'promover-cultura-e-arte',
  },
  {
    label: 'Promover Educação',
    value: 'promover-educacao',
  },
  {
    label: 'Promover Sustentabilidade',
    value: 'promover-sustentabilidade',
  },
  {
    label: 'Outro',
    value: 'outro',
  },
]

export const OPCOES_STATUS = [
  {
    label: 'Criação',
    value: 'criacao',
  },
  {
    label: 'Desenvolvimento',
    value: 'desenvolvimento',
  },
  {
    label: 'Produção',
    value: 'producao',
  },
  {
    label: 'Pós produção',
    value: 'pos-producao',
  },
]


export const OPCOES_SUBCATEGORIA_INDEPENDENTE = [
  {
    label: 'Longa',
    value: 'longa',
  },
  {
    label: 'Curta',
    value: 'curta',
  },
  {
    label: 'Documentário',
    value: 'documentario',
  },
  {
    label: 'Série',
    value: 'serie',
  },
  {
    label: 'Websérie',
    value: 'webserie',
  },
  {
    label: 'Mini-documentário',
    value: 'mini-documentario',
  },
  {
    label: 'Trailer',
    value: 'trailer',
  },
  {
    label: 'Teaser',
    value: 'teaser',
  },
  {
    label: 'Videoclipe',
    value: 'videoclipe',
  },
  {
    label: 'Humor',
    value: 'humor',
  },
  {
    label: 'Entrevista',
    value: 'entrevista',
  },
  {
    label: 'Explicativo',
    value: 'explicativo',
  },
  {
    label: 'Educativo',
    value: 'educativo',
  },
  {
    label: 'Jornalístico',
    value: 'jornalistico',
  },
  {
    label: 'Treinamento',
    value: 'treinamento',
  },
  {
    label: 'Evento',
    value: 'evento',
  },
  {
    label: 'Crowdfunding',
    value: 'crowdfunding',
  },
  {
    label: 'Pessoal',
    value: 'pessoal',
  },
  {
    label: 'Artístico',
    value: 'artistico',
  },
  {
    label: 'Tutorial',
    value: 'tutorial',
  },
  {
    label: 'Outro',
    value: 'outro',
  },
]

export const OPCOES_SUBCATEGORIA_EMPRESARIAL = [
  {
    label: 'Institucional',
    value: 'institucional',
  },
  {
    label: 'Comercial',
    value: 'comercial',
  },
  {
    label: 'Ação de Marketing',
    value: 'acao-de-marketing',
  },
  {
    label: 'Promocional',
    value: 'promocional',
  },
  {
    label: 'Explicativo',
    value: 'explicativo',
  },
  {
    label: 'Educativo',
    value: 'educativo',
  },
  {
    label: 'Entrevista',
    value: 'entrevista',
  },
  {
    label: 'Jornalístico',
    value: 'jornalistico',
  },
  {
    label: 'Treinamento',
    value: 'treinamento',
  },
  {
    label: 'Pesquisa de Marketing',
    value: 'pesquisa-de-marketing',
  },
  {
    label: 'Evento',
    value: 'evento',
  },
  {
    label: 'Crowdfunding',
    value: 'crowdfunding',
  },
  {
    label: 'Making of',
    value: 'making-of',
  },
  {
    label: 'Tutorial',
    value: 'tutorial',
  },
  {
    label: 'Outro',
    value: 'outro',
  },
]

export const OPCOES_LINGUAGEM_VISUAL = [
  {
    label: 'REAL',
    value: 'real',
  },
  {
    label: 'ANIMAÇÃO 2D',
    value: 'animacao-2d',
  },
  {
    label: 'ANIMAÇÃO 3D',
    value: 'animacao-3d',
  },
  {
    label: 'STOPMOTION',
    value: 'stopmotion',
  },
  {
    label: 'MOTION DESIGN',
    value: 'motion-design',
  },
  {
    label: '3D REAL',
    value: '3d-real',
  },
]
export const OPCOES_PROCURA = [
  {
    label: 'MONTAR UM TIME',
    value: 'montar-um-time',
  },
  {
    label: 'PROFISSIONAL DE FUNÇÃO ESPECÍFICA',
    value: 'profissional-de-funcao-especifica',
  },
]

export const OPCOES_CATEGORIA = [
  {
    label: 'Independente',
    value: 'independente',
  }, {
    label: 'Empresarial',
    value: 'empresarial',
  },
]

export const OPCOES_TEMPO_DE_DURACAO = [
  {
    label: 'Até 1 MIN',
    value: '0,1',
  },
  {
    label: '1-3 MIN',
    value: '1,3',
  },
  {
    label: '1-3 MIN',
    value: '3,5',
  },
  {
    label: '5-10 MIN',
    value: '5,10',
  },
  {
    label: '10-15 MIN',
    value: '10,15',
  },
  {
    label: '15-20 MIN',
    value: '15,20',
  },
  {
    label: '20+',
    value: '20,999',
  },
]
