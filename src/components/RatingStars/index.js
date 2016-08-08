import React, { PropTypes } from 'react'
import _ from 'lodash';
import { FullStar, HalfStar, EmptyStar } from '../../resources/icons';

const RatingStars = ({
  rating
}) => {
  const halfs = rating - ((rating % 0.5) < 0.25 ? (rating % 0.5) : -(0.5 - (rating % 0.5)));
  return (
    <div>
      {
        _.range(5).map(i => {
          if (i < halfs - 0.5) {
            return <FullStar key={i} />
          } else if (i < halfs) {
            return <HalfStar key={i}  />
          } else {
            return <EmptyStar key={i}  />
          }
        })
      }
    </div>
  )
}

export default RatingStars
