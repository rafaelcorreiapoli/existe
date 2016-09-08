import React from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import { setDrawerOpen, setInsertBotDialogOpen } from '@ducks/layout'
import { logout } from '@ducks/login'
import AppBar from '@components/AppBar'
import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { call } from '@ducks/methods'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickToggleMenu() {
      dispatch(setDrawerOpen(true))
    },
    onClickProfileLink() {
      dispatch(push('/perfil'))
    },
    onClickAdd() {
      dispatch(push('/novo-projeto'))
    },
    onClickHelpLink() {
      dispatch(push('/help'))
    },
    onClickLogoutLink() {
      dispatch(logout())
    },
    onClickBot(botId) {
      dispatch(call('bots.selectBot', { botId }))
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}

const composer = (props, onData) => {
  onData(null, {})
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composeWithTracker(composer)(AppBar))
