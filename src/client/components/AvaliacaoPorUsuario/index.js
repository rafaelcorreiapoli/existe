import React, { PropTypes } from 'react'
import VerticalDivider from '@components/VerticalDivider'
import RatingStars from '@components/RatingStars'
import moment from 'moment'
import { formatDate } from '@utils/date'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagemContainer: {
    alignSelf: 'flex-start',
  },
  mainContainer: {
    flexGrow: 1,
    padding: 10,
    alignSelf: 'flex-start',
  },
  dateContainer: {
    color: 'gray',
  },
  textRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nome: {
    marginRight: 10,
  },
  funcao: {
    marginLeft: 10,
    marginRight: 10,
  },
  rating: {
    marginLeft: 10,
    marginRight: 10,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  avaliacoesPorCategoriaContainer: {
    marginTop: 20,
  },
}

export const propTypes = {
  nome: PropTypes.string,
  nomeUsuario: PropTypes.string,
  imagem: PropTypes.string,
  funcao: PropTypes.string,
  avaliacaoMedia: PropTypes.number,
  dataAvaliacao: PropTypes.object,
  avaliacoesPorCategoria: PropTypes.arrayOf(PropTypes.shape({
    categoria: PropTypes.string,
    avaliacao: PropTypes.number,
  })),
}
class AvaliacaoPorUsuario extends React.Component {
  static propTypes = propTypes

  render() {
    const {
      nome,
      nomeUsuario,
      imagem,
      funcao,
      avaliacaoMedia,
      dataAvaliacao,
      avaliacoesPorCategoria,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.imagemContainer}>
          <img src={imagem} style={styles.imagem} />
        </div>

        <div style={styles.mainContainer}>

          <div style={styles.textRow}>
            <span style={styles.nome}>{nome}</span>

            <VerticalDivider />

            <span style={styles.funcao}>
              {funcao}
            </span>

            <VerticalDivider />

            <RatingStars
              style={styles.rating}
              rating={avaliacaoMedia}
            />

            <VerticalDivider />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={styles.nomeUsuario}>
              {nomeUsuario}
            </div>

            <span style={styles.dateContainer}>
              Avaliação realizada no dia {formatDate(dataAvaliacao)}
            </span>
          </div>

          <div style={styles.avaliacoesPorCategoriaContainer}>
            {
              avaliacoesPorCategoria.map(avaliacao => (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <span style={{ width: 200 }}>{avaliacao.categoria}</span>
                  <RatingStars rating={avaliacao.avaliacao} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default AvaliacaoPorUsuario;
