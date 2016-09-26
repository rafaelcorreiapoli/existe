import React, { PropTypes } from 'react'
import moment from 'moment'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingRight: 20,
  },
  textContainer: {
    flexGrow: 1,
  },
  dateContainer: {

  },
  date: {
    color: 'gray',
  },
  texto: {

  },
  icon: {

  },
}
class MiniFeedItem extends React.Component {
  static propTypes = {
    icon: PropTypes.element,
    texto: PropTypes.string,
    data: PropTypes.object,
  }
  render() {
    const {
      icon,
      texto,
      data,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.iconContainer}>
          {icon}
        </div>
        <div style={styles.textContainer}>
          <span style={styles.texto}>
            {texto}
          </span>
        </div>
        <div style={styles.dateContainer}>
          <span style={styles.date}>
            {moment(data).fromNow()}
          </span>
        </div>
      </div>
    )
  }
}

export default MiniFeedItem;
