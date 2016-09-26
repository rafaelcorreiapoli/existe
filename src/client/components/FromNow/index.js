import React, { PropTypes } from 'react'
import moment from 'moment'

const styles = {
  date: {
    color: 'gray',
    whiteSpace: 'nowrap',
  },
}

class FromNow extends React.Component {
  static propTypes = {
    date: PropTypes.object,
  }
  render() {
    const {
      date,
    } = this.props
    return (
      <span style={styles.date}>
        {moment(date).fromNow()}
      </span>
    )
  }
}

export default FromNow;
