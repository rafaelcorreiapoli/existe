import React, { PropTypes } from 'react'
import Menu from 'material-ui/Menu';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CustomMenuItem from '@components/CustomMenuItem'

const PerfilMenu = ({
  active,
  onMenuItemClick
}) => {
  return (
    // <div style={{display:'flex'}}>
    <Menu listStyle={{paddingTop: 20, paddingBottom: 0, display: 'block'}} autoWidth={false}>
      <CustomMenuItem
        label="Seguindo"
        id={'seguindo'}
        onClick={onMenuItemClick}
        active={active === 'seguindo'}
      />
      <CustomMenuItem
        label="Notificações"
        id="notificacoes"
        onClick={onMenuItemClick}
        active={active === 'notificacoes'}
      />
      <CustomMenuItem
        label="Projeto"
        id={'projetos/meus'}
        onClick={onMenuItemClick}
        active={active === 'projetos/:filtro'}
      />
      <CustomMenuItem
        label="Seguidores"
        id={'seguidores'}
        onClick={onMenuItemClick}
        active={active === 'seguidores'}
      />
      <CustomMenuItem
        label="Salvos"
        id={'salvos'}
        onClick={onMenuItemClick}
        active={active === 'salvos'}
      />
      <CustomMenuItem
        label="Histórico"
        id={'historico'}
        onClick={onMenuItemClick}
        active={active === 'historico'}
      />
      <CustomMenuItem
        label="Avaliação"
        id={'avaliacoes/feitas'}
        onClick={onMenuItemClick}
        active={active === 'avaliacoes/:filtro'}
      />
      <CustomMenuItem
        label="Editar Perfil"
        id={'editar'}
        onClick={onMenuItemClick}
        active={active === 'editar'}
      />
      {/* <CustomMenuItem
        label="Colaborando"
        id={'colaborando'}
        onClick={onMenuItemClick}
        active={active === 'colaborando'}
      />

      <CustomMenuItem
        label="Favoritos"
        id={'favoritos'}
        onClick={onMenuItemClick}
        active={active === 'favoritos'}
      /> */}



    </Menu>
    // </div>
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
