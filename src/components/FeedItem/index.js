import React from 'react';
import { Imagem } from '../../resources/icons'
import moment from 'moment'

import styles from './styles'

const FeedItem = ({
  title,
  subtitle,
  iconElement,
  imageSrc,
  time,
  style,
  ...other,
}) => (
  <div style={{
    ...styles.root,
    ...style
  }} {...other}>
    <div>
      <img src={imageSrc} style={styles.img}/>
    </div>
    <div style={styles.iconContainer}>
      {iconElement}
    </div>
    <div style={styles.content}>
      <h3 style={styles.title}><b>{title}</b></h3>
      <p>{subtitle}</p>
    </div>
    <div style={styles.time}>
      {moment(time).fromNow()}
    </div>
  </div>
)

export default FeedItem;
