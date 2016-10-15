import React, { PropTypes } from 'react'
import ComunidadeArea from '@components/ComunidadeArea'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}
class Comunidade extends React.Component {
  static propTypes = {
    usuariosPorArea: PropTypes.object,
    onPageChange: PropTypes.func,
    textoPage: PropTypes.number,
    imagemPage: PropTypes.number,
    audioPage: PropTypes.number,
    cenaPage: PropTypes.number,
    producaoPage: PropTypes.number,
  }

  render() {
    const {
      usuariosPorArea,
      onPageChange,
    } = this.props

    return (
      <div style={styles.container}>
        <ComunidadeArea
          area="texto"
          pageSize={5}
          onPageChange={page => onPageChange('texto', page)}
          {...usuariosPorArea.texto}
        />
        <ComunidadeArea
          area="imagem"
          usuarios={usuariosPorArea.imagem.usuarios}
          usuariosCount={usuariosPorArea.imagem.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.imagem.page}
          onPageChange={page => onPageChange('imagem', page)}
          {...usuariosPorArea.imagem}
        />
        <ComunidadeArea
          area="audio"
          usuarios={usuariosPorArea.audio.usuarios}
          usuariosCount={usuariosPorArea.audio.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.audio.page}
          onPageChange={page => onPageChange('audio', page)}
          {...usuariosPorArea.audio}
        />
        <ComunidadeArea
          area="cena"
          usuarios={usuariosPorArea.cena.usuarios}
          usuariosCount={usuariosPorArea.cena.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.cena.page}
          onPageChange={page => onPageChange('cena', page)}
          {...usuariosPorArea.cena}
        />
        <ComunidadeArea
          area="producao"
          usuarios={usuariosPorArea.producao.usuarios}
          usuariosCount={usuariosPorArea.producao.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.producao.page}
          onPageChange={page => onPageChange('producao', page)}
          {...usuariosPorArea.producao}
        />
      </div>
    )
  }
}

export default Comunidade;
