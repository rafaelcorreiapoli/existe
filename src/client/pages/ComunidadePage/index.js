import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import UsuariosPorArea from '@containers/UsuariosPorArea'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AreaTitle from '@components/AreaTitle'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}

class ComunidadePage extends React.Component {
  static propTypes = {
    onClickTitle: PropTypes.func,
  }
  render() {
    const {
      onClickTitle,
    } = this.props
    return (
      <div style={styles.container}>
        <AreaTitle
          area="texto"
          onClickTitle={() => onClickTitle('texto')}
        />
        <UsuariosPorArea
          area={'texto'}
          pageSize={5}
        />
        <Divider />
        <AreaTitle
          area="imagem"
          onClickTitle={() => onClickTitle('imagem')}
        />
        <UsuariosPorArea
          area={'imagem'}
          pageSize={5}
        />
        <Divider />
        <AreaTitle
          area="audio"
          onClickTitle={() => onClickTitle('audio')}
        />
        <UsuariosPorArea
          area={'audio'}
          pageSize={5}
        />
        <Divider />
        <AreaTitle
          area="cena"
          onClickTitle={() => onClickTitle('cena')}
        />
        <UsuariosPorArea
          area={'cena'}
          pageSize={5}
        />
        <Divider />
        <AreaTitle
          area="producao"
          onClickTitle={() => onClickTitle('producao')}
        />
        <UsuariosPorArea
          area={'producao'}
          pageSize={5}
        />
        <Divider />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClickTitle(area) {
    dispatch(push(`/comunidade/${area}`))
  }
})

export default connect(null, mapDispatchToProps)(ComunidadePage);
