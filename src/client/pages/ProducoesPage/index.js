import React, { PropTypes } from 'react'
import BuscarUsuario from '@containers/BuscarUsuario'


class ProducoesPage extends React.Component {
  render() {
    return (
      <div>
        <BuscarUsuario
          searchId="busca1"
          onChange={u => console.log(u)}
        />
      </div>
    )
  }
}

export default ProducoesPage
