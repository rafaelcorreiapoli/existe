import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import { setDrawerOpen } from '@ducks/layout'
import { logout } from '@ducks/login'
import AppBar from '@components/AppBar'
import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickToggleMenu() {
      dispatch(setDrawerOpen(true))
    },
    navigate(to) {
      dispatch(push(to))
    },
    logout() {
      dispatch(logout())
    },
  }
}

const composer = (props, onData) => {
  onData(null, {})
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composeWithTracker(composer)(AppBar))
