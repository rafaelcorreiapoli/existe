import React, { PropTypes } from 'react'
import Menu from 'material-ui/Menu';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CustomMenuItem from '@components/CustomMenuItem'

const styles = {
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    display: 'block',
  },
  menuItem: {
    textAlign: 'left',
  },
}

class UsuarioMenu extends React.Component {
  static propTypes = {
    active: PropTypes.string,
    onMenuItemClick: PropTypes.func,
  }
  render() {
    const {
      active,
      onMenuItemClick,
    } = this.props

    return (
      <Menu listStyle={styles.list} autoWidth={false}>
        <CustomMenuItem
          label="Informações Pessoais"
          id="info"
          onClick={onMenuItemClick}
          active={active === 'info'}
          style={styles.menuItem}
        />
        <CustomMenuItem
          label="Formação"
          id={'formacao'}
          onClick={onMenuItemClick}
          active={active === 'formacao'}
          style={styles.menuItem}
        />
        <CustomMenuItem
          label="Portfólio"
          id={'portfolio'}
          onClick={onMenuItemClick}
          active={active === 'portfolio'}
          style={styles.menuItem}
        />
        <CustomMenuItem
          label="Experiência Profissional"
          id={'experiencia'}
          onClick={onMenuItemClick}
          active={active === 'experiencia'}
          style={styles.menuItem}
        />
        <CustomMenuItem
          label="Habilidades"
          id={'habilidades'}
          onClick={onMenuItemClick}
          active={active === 'habilidades'}
          style={styles.menuItem}
        />
        <CustomMenuItem
          label="Funções e times criativos"
          id={'funcoes'}
          onClick={onMenuItemClick}
          active={active === 'funcoes'}
          style={styles.menuItem}
        />
        <CustomMenuItem
          label="Histórico EXISTE"
          id={'historico'}
          onClick={onMenuItemClick}
          active={active === 'historico'}
          style={styles.menuItem}
        />
        {/* <CustomMenuItem
          label="Avaliações"
          id={'avaliacoes'}
          onClick={onMenuItemClick}
          active={active === 'avaliacoes'}
          style={styles.menuItem}
        /> */}
        {/* <CustomMenuItem
          label="Seguidores"
          id={'seguidores'}
          onClick={onMenuItemClick}
          active={active === 'seguidores'}
          style={styles.menuItem}
        /> */}
      </Menu>
    )
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  const { userId } = ownProps
  return {
    onMenuItemClick(item) {
      dispatch(push(`/usuario/${userId}/${item}`))
    },
  }
}


export default connect(
  null,
  mapDispatchToProps
)(UsuarioMenu)
