import React from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import TabNav from '@components/TabNav'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    selectedTab: 'mural',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate(to) {
      dispatch(push(to))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabNav)
