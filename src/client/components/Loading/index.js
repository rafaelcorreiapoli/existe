import React, { PropTypes } from 'react'
import MDSpinner from 'react-md-spinner'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

class Loading extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <MDSpinner />
      </div>
    )
  }
}

export default Loading;
