import React, { PropTypes } from 'react'
import PerfilTabs from '@components/PerfilTabs'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { composeWithTracker } from 'react-komposer'
import { Audio } from '@resources/icons'
import ItemExpansivo from '@components/ItemExpansivo'
import MiniFeedItem from '@components/MiniFeedItem'
import moment from 'moment'

class Projetos extends React.Component {
  static propTypes = {
    meusCount: PropTypes.number,
    colaborandoCount: PropTypes.number,
    finalizadosCount: PropTypes.number,
    onMeusClick: PropTypes.func,
    onColaborandoClick: PropTypes.func,
    onFinalizadosClick: PropTypes.func,
    children: PropTypes.node,
    routes: PropTypes.array,
    projetos: PropTypes.array,
    params: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.getSubtitulo = this.getSubtitulo.bind(this)
  }

  getSubtitulo(projeto) {
    const {
      params: {
        filtro,
      },
    } = this.props

    switch (filtro) {
      case 'meus':
      default:
        return '';
      case 'colaborando':
        return projeto.nomeUsuario
      case 'finalizados':
        return projeto.nomeUsuario
    }
  }

  getBody(projeto) {
    const {
      params: {
        filtro,
      },
    } = this.props

    switch (filtro) {
      case 'meus':
      default:
        return `Criado no dia ${this._format(projeto.data)}`;
      case 'colaborando':
        return `Criado no dia ${this._format(projeto.data)} |
          Colaborando desde ${this._format(projeto.dataColaborando)}`
      case 'finalizados':
        return `Criado no dia ${this._format(projeto.data)} |
          Finalizado no dia ${this._format(projeto.dataFinalizado)}`
    }
  }


  _format(data) {
    return moment(data).format('DD/MM/YYYY')
  }

  render() {
    const {
      meusCount = 0,
      colaborandoCount = 0,
      finalizadosCount = 0,
      onMeusClick,
      onColaborandoClick,
      onFinalizadosClick,
      params: {
        filtro,
      },
      projetos,
    } = this.props


    const tabs = [
      {
        label: 'Meus',
        value: 'meus',
        count: meusCount,
        onClick: onMeusClick,
      },
      {
        label: 'Colaborando',
        value: 'colaborando',
        count: colaborandoCount,
        onClick: onColaborandoClick,
      },
      {
        label: 'Finalizados',
        value: 'finalizados',
        count: finalizadosCount,
        onClick: onFinalizadosClick,
      },
    ]

    return (
      <PerfilTabs
        tabs={tabs}
        title={'Projetos'}
        activeTab={filtro}
      >
        <div>
          {projetos.map((projeto, i) => (
            <ItemExpansivo
              key={i}
              badgeCount={projeto.feeds.length}
              titulo={projeto.nome}
              subtitulo={this.getSubtitulo(projeto)}
              body={<span style={{ color: 'gray' }}>
                {this.getBody(projeto)}
              </span>}
              imagem={projeto.imagem}
              seguidoresCount={projeto.seguidoresCount}
              colaboradoresCount={projeto.colaboradoresCount}
              data={projeto.data}
              hideDeixarDeSeguir
            >
              {projeto.feeds.map((feed, j) => (
                <MiniFeedItem
                  key={j}
                  icon={feed.icon}
                  texto={feed.texto}
                  data={feed.data}
                />
              ))}
            </ItemExpansivo>
          ))}
        </div>
      </PerfilTabs>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMeusClick() {
      dispatch(push('/perfil/projetos/meus'))
    },
    onColaborandoClick() {
      dispatch(push('/perfil/projetos/colaborando'))
    },
    onFinalizadosClick() {
      dispatch(push('/perfil/projetos/finalizados'))
    },
  }
}

const composer = (props, onData) => {
  const {
    params: {
      filtro,
    },
  } = props
  onData(null, {
    projetos: [{
      nome: 'projeto 01',
      seguidoresCount: 100,
      colaboradoresCount: 100,
      nomeUsuario: 'rafael',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
      feeds: [{
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }],
    }, {
      nome: 'projeto 02',
      seguidoresCount: 100,
      colaboradoresCount: 100,
      nomeUsuario: 'rafael',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
      feeds: [{
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }],
    }],
  })
}

export default connect(
  null,
  mapDispatchToProps
)(composeWithTracker(composer)(Projetos))
