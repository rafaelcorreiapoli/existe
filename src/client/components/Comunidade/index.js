/**
 * DEPRECATED
 */
import React, { PropTypes } from 'react'
import ComunidadeArea from '@components/ComunidadeArea'
import Divider from 'material-ui/Divider'
import UsuariosPorArea from '@containers/UsuariosPorArea'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}
class Comunidade extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <UsuariosPorArea
          area={'texto'}
          pageSize={5}
        />
        <UsuariosPorArea
          area={'imagem'}
          pageSize={5}
        />
        <UsuariosPorArea
          area={'audio'}
          pageSize={5}
        />
        <UsuariosPorArea
          area={'cena'}
          pageSize={5}
        />
        <UsuariosPorArea
          area={'producao'}
          pageSize={5}
        />
        {/* <ComunidadeArea
          area="texto"
          pageSize={5}
          onPageChange={page => onPageChange('texto', page)}
          {...usuariosPorArea.texto}
        />
        <Divider />
        <ComunidadeArea
          area="imagem"
          usuarios={usuariosPorArea.imagem.usuarios}
          usuariosCount={usuariosPorArea.imagem.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.imagem.page}
          onPageChange={page => onPageChange('imagem', page)}
          {...usuariosPorArea.imagem}
        />
        <Divider />
        <ComunidadeArea
          area="audio"
          usuarios={usuariosPorArea.audio.usuarios}
          usuariosCount={usuariosPorArea.audio.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.audio.page}
          onPageChange={page => onPageChange('audio', page)}
          {...usuariosPorArea.audio}
        />
        <Divider />
        <ComunidadeArea
          area="cena"
          usuarios={usuariosPorArea.cena.usuarios}
          usuariosCount={usuariosPorArea.cena.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.cena.page}
          onPageChange={page => onPageChange('cena', page)}
          {...usuariosPorArea.cena}
        />
        <Divider />
        <ComunidadeArea
          area="producao"
          usuarios={usuariosPorArea.producao.usuarios}
          usuariosCount={usuariosPorArea.producao.usuariosCount}
          pageSize={5}
          page={usuariosPorArea.producao.page}
          onPageChange={page => onPageChange('producao', page)}
          {...usuariosPorArea.producao}
        />
        <Divider /> */}
      </div>
    )
  }
}

export default Comunidade;
