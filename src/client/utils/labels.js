const funcoes = [
  {
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
  {
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
  {
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
]

export const getFuncaoLabelByValue = (value) => {
  const funcao = funcoes.find(f => f.value === value)
  return funcao ? funcao.label : 'Desconhecido'
}
