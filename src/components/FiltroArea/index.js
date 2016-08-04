import React, { PropTypes } from 'react'
import MultiColumnDropdown from '../MultiColumnDropdown';


const options =
[{
  color: '#61c785',
  divisor: true,
  text: 'TEXTO',
  value: 'texto'
},
{
  color: '#61c785',
  divisor: false,
  text: 'HISTÓRIA',
  value: 'historia'
},
{
  color: '#61c785',
  divisor: false,
  text: 'ROTEIRISTA',
  value: 'roteirista'
},
{
  color: '#61c785',
  divisor: false,
  text: 'TRADUTOR',
  value: 'tradutor'
},
{
  color: '#8c4f9d',
  divisor: true,
  text: 'IMAGEM',
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'DIRETOR DE CENA',
  value: 'diretor_de_cena'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: '1° ASSISTENTE DE DIREÇÃO',
  value: '1_assistente_de_direcao'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: '2° ASSISTENTE DE DIREÇÃO',
  value: '2_assistente_de_direcao'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'DIRETOR DE FOTOGRAFIA',
  value: 'diretor_de_fotografia'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: '1° ASSISTENTE DE FOTOGRAFIA',
  value: '1_assistente_de_fotografia'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: '2° ASSISTENTE DE FOTOGRAFIA',
  value: '2_assistente_de_fotografia'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'OPERADOR DE CAMERA',
  value: 'operador_de_camera'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'ASSISTENTE DE CAMERA',
  value: 'assistente_de_camera'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'ASSISTENTE DE ILUMINAÇÃO',
  value: 'assistente_de_iluminacao'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'OPERADOR DE STEADYCAM',
  value: 'operador_de_steadycam'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'FOTÓGRAFO',
  value: 'fotografo'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'DIRETOR DE ARTE',
  value: 'diretor_de_arte'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'CENÓGRAFO',
  value: 'cenografo'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'EDITOR DE VÍDEO',
  value: 'editor_de_video'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'DESIGNER GRÁFICO',
  value: 'designer_grafico'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'ANIMADOR',
  value: 'animador'
},
{
  color: '#8c4f9d',
  divisor: false,
  text: 'DESENHISTA DE STORYBOARD',
  value: 'desenhista_storyboard'
},
{
  color: '#fbb019',
  divisor: true,
  text: 'ÁUDIO',
},
{
  color: '#fbb019',
  divisor: false,
  text: 'TÉCNICO DE SOM DIRETO',
  value: 'tecnico_de_som_direto'
},
{
  color: '#fbb019',
  divisor: false,
  text: 'MICROFONISTA',
  value: 'desenhista_storyboard'
},
{
  color: '#fbb019',
  divisor: false,
  text: 'ASSISTENTE DE SOM',
  value: 'desenhista_storyboard'
},
{
  color: '#fbb019',
  divisor: false,
  text: 'EDITOR DE SOM',
  value: 'desenhista_storyboard'
},
{
  color: '#fbb019',
  divisor: false,
  text: 'MIXADOR',
  value: 'desenhista_storyboard'
},
{
  color: '#fbb019',
  divisor: false,
  text: 'LOCUTOR',
  value: 'desenhista_storyboard'
},
{
  color: '#fbb019',
  divisor: false,
  text: 'DUBLADOR',
  value: 'desenhista_storyboard'
},
{
  color: '#2aafb8',
  divisor: true,
  text: 'CENA',
},
{
  color: '#2aafb8',
  divisor: false,
  text: 'ATOR',
  value: 'desenhista_storyboard'
},
{
  color: '#2aafb8',
  divisor: false,
  text: 'ATRIZ',
  value: 'desenhista_storyboard'
},
{
  color: '#2aafb8',
  divisor: false,
  text: 'FIGURANTE',
  value: 'desenhista_storyboard'
},
{
  color: '#2aafb8',
  divisor: false,
  text: 'DIRETOR DE CASTING',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: true,
  text: 'PRODUCAO',
},
{
  color: '#e36a55',
  divisor: false,
  text: 'PRODUTOR',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: false,
  text: 'ASSISTENTE DE PRODUÇÃO',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: false,
  text: 'COORDENADOR DE PRODUÇÃO',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: false,
  text: 'ASSISTENTE DE LOCAÇÃO',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: false,
  text: 'CONTINUÍSTA',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: false,
  text: 'FIGURINISTA',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: false,
  text: 'CABELEREIRO',
  value: 'desenhista_storyboard'
},
{
  color: '#e36a55',
  divisor: false,
  text: 'MAQUIADOR',
  value: 'desenhista_storyboard'
}]


const FiltroArea = ({
  value,
  ...props
}) => {
  return (
    <MultiColumnDropdown
      value={value}
      options={options}
      {...props} />
  )
}

export default FiltroArea
