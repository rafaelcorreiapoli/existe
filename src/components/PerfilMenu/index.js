import React, { PropTypes } from 'react'
import Menu from 'material-ui/Menu';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CustomMenuItem from '../CustomMenuItem'

const PerfilMenu = ({
  active,
  onMenuItemClick
}) => {
  return (
    <div style={{display:'flex'}}>
    <Menu style={{width: '100%'}} listStyle={{paddingTop: 0, paddingBottom: 0}}>
      <CustomMenuItem label="Notificações" id="notificacoes" onClick={onMenuItemClick} active={active === 'notificacoes'}/>
      <CustomMenuItem label="Colaborando" id={'colaborando'} onClick={onMenuItemClick} active={active === 'colaborando'} />
      <CustomMenuItem label="Seguindo" id={'seguindo'} onClick={onMenuItemClick} active={active === 'seguindo'} />
      <CustomMenuItem label="Seguidores" id={'seguidores'} onClick={onMenuItemClick} active={active === 'seguidores'} />
      <CustomMenuItem label="Salvos" id={'salvos'} onClick={onMenuItemClick} active={active === 'salvos'} />
      <CustomMenuItem label="Favoritos" id={'favoritos'} onClick={onMenuItemClick} active={active === 'favoritos'} />
      <CustomMenuItem label="Histórico" id={'historico'} onClick={onMenuItemClick} active={active === 'historico'} />
      <CustomMenuItem label="Avaliação" id={'avaliacoes'} onClick={onMenuItemClick} active={active === 'avaliacoes'} />
      <CustomMenuItem label="Editar Perfil" id={'editar'} onClick={onMenuItemClick} active={active === 'editar'} />
    </Menu>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuItemClick(item) {
      dispatch(push(`/perfil/${item}`))
    }
  }
}


export default connect(
  null,
  mapDispatchToProps
)(PerfilMenu)
