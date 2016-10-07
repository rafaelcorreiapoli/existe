import React, { PropTypes } from 'react'

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
}

class Row extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    v: PropTypes.string,
    h: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const {
      children,
      v,
      h,
      style,
    } = this.props

    const vCenterStyle = {
      alignItems: v,
    }
    const hCenterStyle = {
      justifyContent: h,
    }

    const mergedStyles = Object.assign({},
      styles.row,
      v ? vCenterStyle : {},
      h ? hCenterStyle : {},
      style,
    )

    return (
      <div style={mergedStyles}>
        {children}
      </div>
    )
  }
}

export default Row
