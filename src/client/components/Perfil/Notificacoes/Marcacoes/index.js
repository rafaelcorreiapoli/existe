import React, { PropTypes } from 'react'
import MiniFeedItem from '@components/MiniFeedItem'
import ItemExpansivo from '@components/ItemExpansivo'
import GridUsuariosPortrait from '@components/GridUsuariosPortrait'
import { Texto } from '@resources/icons'

const usuarios = [
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
  {
    nome: 'RAFAEL',
    funcao: 'ENGENHEIRO',
    imagem: 'http://placehold.it/300x300',
  },
]

class Marcacoes extends React.Component {
  render() {
    return (
      <div>

        {/* <ItemExpansivo
          badgeCount={5}
          nome="NOME DO PROJETO"
          nomeUsuario="NOMEDOUSUARIO"
          imagem="http://placehold.it/400x400"
          seguidoresCount={3}
          data={new Date()}
          deixarDeSeguir={() => console.log('deixar de seguir')}
        >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <MiniFeedItem
            icon={<Texto />}
            texto={'Esse é um texto'}
            data={new Date()}
          />
          <MiniFeedItem
            icon={<Texto />}
            texto={'Esse é um texto'}
            data={new Date()}
          />
          <MiniFeedItem
            icon={<Texto />}
            texto={'Esse é um texto'}
            data={new Date()}
          />
        </div>
        </ItemExpansivo> */}
        <GridUsuariosPortrait
          usuarios={usuarios}
        />
        {/* <UserPortrait
          imagem={'http://placehold.it/300x300'}
          nome={'RAFAEL RIBEIRO CORREIA'}
          funcao={'ENGENHEIRO'}
        /> */}
      </div>
    )
  }
}

export default Marcacoes
