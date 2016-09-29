import React, { PropTypes } from 'react'

const styles = {
  divider: {

  }
}
class VerticalDivider extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  }

  render() {
    const {
      style,
    } = this.props
    return (
      <div style={Object.assign({}, styles.divider, style)}>
        |
      </div>
    )
  }
}

export default VerticalDivider;
