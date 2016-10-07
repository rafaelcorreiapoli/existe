import React, { PropTypes } from 'react'
import ListaUsuariosItem from '@components/ListaUsuariosItem'
import { List } from 'material-ui/List'

class ListaUsuarios extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
    onClick: PropTypes.func,
  }

  render() {
    const {
      usuarios,
      onClick,
    } = this.props
    return (
      <List style={{ width: '100%' }}>
        {
          usuarios.map((usuario, i) => (
            <ListaUsuariosItem
              key={i}
              onClick={() => onClick(usuario)}
              {...usuario}
            />
          ))
        }
      </List>
    )
  }
}

export default ListaUsuarios;
