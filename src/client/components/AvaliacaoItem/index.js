import React, { PropTypes } from 'react'
import collapseHOC from '@components/CollapseHOC'
import VerticalDivider from '@components/VerticalDivider'
import CollapseToggle from '@components/CollapseToggle'
import RatingStars from '@components/RatingStars'
import AvaliacaoPorUsuario, { propTypes } from '@components/AvaliacaoPorUsuario'
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
  subtituloContainer: {
    flexGrow: 1,
  },
  bodyContainer: {
    marginTop: 20,
  },
  bodyContainerContraido: {
    maxWidth: 600,
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  nome: {
    marginRight: 10,
  },
  avaliacoesCount: {
    marginLeft: 10,
    marginRight: 10,
  },
  rating: {
    marginLeft: 10,
    marginRight: 10,
  },
  deixarDeSeguir: {
    marginLeft: 10,
    marginRight: 10,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  children: {
    marginTop: 20,
  },
}


class AvaliacaoItem extends React.Component {
  static propTypes = {
    toggleCollapse: PropTypes.func,
    collapse: PropTypes.bool,
    nome: PropTypes.string,
    imagem: PropTypes.string,
    avaliacoesCount: PropTypes.number,
    avaliacaoMedia: PropTypes.number,
    criadoEm: PropTypes.object,
    finalizadoEm: PropTypes.object,
    avaliacoesPorUsuario: PropTypes.arrayOf(PropTypes.shape(propTypes)),
  }
  render() {
    const {
      toggleCollapse,
      collapse,

      nome,
      imagem,
      avaliacoesCount,
      avaliacaoMedia,
      criadoEm,
      finalizadoEm,
      avaliacoesPorUsuario,
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

            <CollapseToggle
              onToggle={toggleCollapse}
              collapse={collapse}
            />

            <VerticalDivider />

            <span style={styles.avaliacoesCount}>
              {avaliacoesCount} AVALIAÇÕES
            </span>

            <VerticalDivider />

            <RatingStars
              style={styles.rating}
              rating={avaliacaoMedia}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={styles.dateContainer}>
              Criado no dia {formatDate(criadoEm)}
            </div>
            <VerticalDivider
              style={{
                color: 'gray',
                marginLeft: 20,
                marginRight: 20,
              }}
            />
            <div style={styles.dateContainer}>
              Finalizado no dia {formatDate(finalizadoEm)}
            </div>
          </div>

          {
            collapse &&
              <div style={styles.children}>
                {
                  avaliacoesPorUsuario.map(avaliacao => (
                    <AvaliacaoPorUsuario
                      {...avaliacao}
                    />
                  ))
                }
              </div>
          }

        </div>
      </div>
    )
  }
}

export default collapseHOC(AvaliacaoItem);
