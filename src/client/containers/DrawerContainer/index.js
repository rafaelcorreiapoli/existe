import React from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import Drawer from '@components/Drawer'
import { setDrawerOpen } from '@ducks/layout'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.layout.get('drawerOpen'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeDrawerState(open) {
      dispatch(setDrawerOpen(open))
    },
    navigate(to) {
      dispatch(setDrawerOpen(false))
      dispatch(push(to))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer)
