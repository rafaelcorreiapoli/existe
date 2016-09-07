import React, { PropTypes } from 'react'
import Menu from 'material-ui/Menu';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CustomMenuItem from '../CustomMenuItem'

const styles = {
  menuItem: {
    textAlign: 'left'
  }
}
const PerfilMenu = ({
  active,
  onMenuItemClick
}) => {
  return (
    <Menu listStyle={{paddingTop: 0, paddingBottom: 0, display: 'block'}} autoWidth={false}>
      <CustomMenuItem label="Informações Pessoais" id="info" onClick={onMenuItemClick} active={active === 'info'} style={styles.menuItem} />
      <CustomMenuItem label="Portfólio" id={'portfolio'} onClick={onMenuItemClick} active={active === 'portfolio'} style={styles.menuItem} />
      <CustomMenuItem label="Experiência Profissional" id={'experiencia'} onClick={onMenuItemClick} active={active === 'experiencia'} style={styles.menuItem} />
      <CustomMenuItem label="Funções" id={'funcoes'} onClick={onMenuItemClick} active={active === 'funcoes'} style={styles.menuItem} />
      <CustomMenuItem label="Histórico EXISTE" id={'historico'} onClick={onMenuItemClick} active={active === 'historico'} style={styles.menuItem} />
      <CustomMenuItem label="Avaliações" id={'avaliacoes'} onClick={onMenuItemClick} active={active === 'avaliacoes'} style={styles.menuItem} />
      <CustomMenuItem label="Seguidores" id={'seguidores'} onClick={onMenuItemClick} active={active === 'seguidores'} style={styles.menuItem} />
    </Menu>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { userId } = ownProps
  return {
    onMenuItemClick(item) {
      dispatch(push(`/usuario/${userId}/${item}`))
    }
  }
}


export default connect(
  null,
  mapDispatchToProps
)(PerfilMenu)
