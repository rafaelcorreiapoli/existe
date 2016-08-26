import React from 'react';
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../actions/app'
import { setupDdpListeners } from '../../ducks/ddp/collections'

import { push } from 'react-router-redux';
import App from '../../components/App'

const mapStateToProps = (state) => {
  return {
    loggingIn: state.ddp.user.get('loggingIn')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount() {
      dispatch(setupDdpListeners())
    }
  }
}

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount()
  }
  
  render() {
    return <App {...this.props} />
  }
}

AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

export default AppContainer
