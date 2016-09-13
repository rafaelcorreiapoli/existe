import React, { PropTypes } from 'react'
import DrawerContainer from '@containers/DrawerContainer'
import AppBarContainer from '@containers/AppBarContainer';

const styles = {
  container: {
    maxWidth: 1200,
    margin: 'auto',
    marginTop: 75,
  },
}
class AuthenticatedLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    insertBotDialogOpen: PropTypes.bool,
    handleRequestClose: PropTypes.func,
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <div>
        <DrawerContainer />
        <AppBarContainer />
        <div style={styles.container}>
          {children}
        </div>
      </div>
    )
  }
}

export default AuthenticatedLayout
