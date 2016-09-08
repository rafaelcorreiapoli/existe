import React, { PropTypes } from 'react'
import FeedItem from '@components/FeedItem'
const FeedList = ({
  feeds
}) => {
  return (
    <div style={{width: '100%'}}>
      {feeds && feeds.map((feed, i) => (
        <FeedItem
          key={i}
          {...feed}
          style={{marginBottom: 40}}
        />
      ))}
    </div>
  )
}

export default FeedList
