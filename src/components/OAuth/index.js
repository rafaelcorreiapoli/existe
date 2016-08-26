import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { validateCode } from '../../ducks/oauth'

class OAuth extends React.Component {
  componentDidMount() {
    this.props.validateCode(this.props.params.provider, this.props.location.query.code)
  }

  render() {
    return <div>validating...</div>
  }
}

const mapDispatchToProps = dispatch => ({
  validateCode(provider, code) {
    dispatch(validateCode(provider, code))
  }
})
export default connect(
  null,
  mapDispatchToProps
)(OAuth)
