import React, { PropTypes } from 'react'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { ACCENT } from '../../resources/colors'
import Radium from 'radium'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
const styles = {
  menuItem: {
    textAlign: 'right'
  },
  menuItemActive: {
    color: ACCENT
  },
  innerDivActive: {
    borderRightWidth: 2,
    borderRightColor: ACCENT,
    borderRightStyle: 'solid'
  }
}

const RadiumMenuItem = Radium(MenuItem)

class CustomMenuItem extends React.Component {
  render() {
    const {
      label,
      active,
      id,
      onClick
    } = this.props
    const style = Object.assign({}, styles.menuItem,
      active === id ? styles.menuItemActive : {}
    )
    const innerDivStyle = active === id ? styles.innerDivActive : null

    return (
      <MenuItem
        innerDivStyle={innerDivStyle}
        primaryText={label}
        style={style}
        onClick={() => onClick(id)}
      />
    )
  }
}

const PerfilMenu = ({
  active,
  onMenuItemClick
}) => {
  return (
    <div style={{display:'flex'}}>
    <Menu style={{width: '100%'}}>
      <CustomMenuItem label="Notificações" id="notificacoes" onClick={onMenuItemClick} active={active}/>
      <CustomMenuItem label="Colaborando" id={'colaborando'} onClick={onMenuItemClick} active={active} />
      <CustomMenuItem label="Seguindo" id={'seguindo'} onClick={onMenuItemClick} active={active} />
      <CustomMenuItem label="Seguidores" id={'seguidores'} onClick={onMenuItemClick} active={active} />
      <CustomMenuItem label="Salvos" id={'salvos'} onClick={onMenuItemClick} active={active} />
      <CustomMenuItem label="Favoritos" id={'favoritos'} onClick={onMenuItemClick} active={active} />
      <CustomMenuItem label="Histórico" id={'historico'} onClick={onMenuItemClick} active={active} />
      <CustomMenuItem label="Avaliação" id={'avaliacoes'} onClick={onMenuItemClick} active={active} />
      <CustomMenuItem label="Editar Perfil" id={'editar'} onClick={onMenuItemClick} active={active} />
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
