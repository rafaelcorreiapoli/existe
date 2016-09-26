import React, { PropTypes } from 'react'
import ItemExpansivo from '@components/ItemExpansivo'
import { composeWithTracker } from 'react-komposer'
import MiniFeedItem from '@components/MiniFeedItem'
import { Audio } from '@resources/icons'
import Mensagem from '@components/Mensagem'

const lorem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
'otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,' +
'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,' +
'adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, ' +
'nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, ' +
'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

class Convites extends React.Component {
  static propTypes = {
    convites: PropTypes.array,
  }

  render() {
    const {
      convites,
    } = this.props
    return (
      <div>
        {convites.map((convite, i) => (
          <ItemExpansivo
            key={i}
            badgeCount={convite.mensagens.length}
            titulo={convite.titulo}
            subtitulo={convite.subtitulo}
            imagem={convite.imagem}
            data={convite.data}
            body={<span>{lorem}</span>}
            hideSeguidores
            hideDeixarDeSeguir
          >
            <div>
              {
                convite.mensagens.map(mensagem => (
                  <Mensagem
                    imagem={mensagem.imagem}
                    texto={mensagem.texto}
                    data={mensagem.data}
                  />
                ))
              }
            </div>
          </ItemExpansivo>
        ))}
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    convites: [{
      titulo: 'RAFAEL RIBEIRO CORREIA',
      subtitulo: 'Convidou você para ser ENGENHEIRO na POLI',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
      mensagens: [{
        imagem: 'http://placehold.it/300x300',
        texto: lorem,
        data: new Date(),
      }, {
        imagem: 'http://placehold.it/300x300',
        texto: lorem,
        data: new Date(),
      }, {
        imagem: 'http://placehold.it/300x300',
        texto: lorem,
        data: new Date(),
      }, {
        imagem: 'http://placehold.it/300x300',
        texto: lorem,
        data: new Date(),
      }],
    }],
  })
}
export default composeWithTracker(composer)(Convites);
