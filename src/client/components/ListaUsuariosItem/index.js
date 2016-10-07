import React, { PropTypes } from 'react'
// import Row from '@components/Row'
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
//
// const styles = {
//   container: {
//     padding: 10,
//   },
//   image: {
//     marginRight: 10,
//     display: 'block',
//   },
//   usuario: {
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   nomeCompleto: {
//     color: 'gray',
//   },
//  }

class ListaUsuariosItem extends React.Component {
  static propTypes = {
    imagem: PropTypes.string,
    usuario: PropTypes.string,
    email: PropTypes.string,
    nomeCompleto: PropTypes.string,
    onClick: PropTypes.func,
  }

  render() {
    const {
      imagem,
      usuario,
      nomeCompleto,
      email,
      onClick,
    } = this.props

    return (
      // <Row v="center" style={styles.container}>
      //   <div>
      //     <img src={imagem} role="presentation" style={styles.image} />
      //   </div>
      //   <div style={styles.usuario}>{usuario}</div>
      //   <div style={styles.nomeCompleto}>{nomeCompleto}</div>
      // </Row>
      <ListItem
        onTouchTap={onClick}
        primaryText={nomeCompleto}
        secondaryText={email}
        leftAvatar={<Avatar src={imagem || 'http://placehold.it/40x40'} />}
      />
    )
  }
}

export default ListaUsuariosItem;
