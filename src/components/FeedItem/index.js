import React, { PropTypes } from 'react'
import moment from 'moment'
import Radium from 'radium'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  imageContainer: {
    width: 100
  },
  iconContainer: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    padding: 10
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    display: 'block'
  },
  title: {
    marginTop: 0,
    marginBottom: 20,
    fontSize: 18
  },
  subtitle: {
    margin: 0,
    color: '#555'
  },
  date: {
    color: 'gray'
  }
}
const FeedItem = ({
  image,
  iconElement,
  title,
  subtitle,
  date,
  style,
  ...props
}) => {
  return (
    <div style={[styles.container, style]} {...props}>
      <div style={styles.imageContainer}>
        <img src={image} style={styles.image}/>
      </div>
      <div style={styles.iconContainer}>
        {React.cloneElement(iconElement, {
          style: {
            width: 40,
            height: 40
          }
        })}
      </div>
      <div style={styles.textContainer}>
        <span style={styles.title}>{title}</span>
        <span style={styles.subtitle}>{subtitle}</span>
      </div>
      <div style={styles.dateContainer}>
        <span style={styles.date}>{moment(date).fromNow()}</span>
      </div>

    </div>
  )
}

export default Radium(FeedItem)
