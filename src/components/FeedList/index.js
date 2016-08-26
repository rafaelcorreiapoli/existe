import React, { PropTypes } from 'react'
import FeedItem from '../FeedItem'
const FeedList = ({
  feeds
}) => {
  return (
    <div>
      {feeds && feeds.map(feed => (
        <FeedItem
          {...feed}
          style={{marginBottom: 40}}
        />
      ))}
    </div>
  )
}

export default FeedList
