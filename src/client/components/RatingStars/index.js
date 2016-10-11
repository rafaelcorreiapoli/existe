import React, { PropTypes } from 'react'
import _ from 'lodash';
import { FullStar, HalfStar, EmptyStar } from '@resources/icons';

const RatingStars = ({
  rating,
  style,
  color,
  ...props,
}) => {
  const halfs = rating - ((rating % 0.5) < 0.25 ? (rating % 0.5) : -(0.5 - (rating % 0.5)));
  return (
    <div style={style} {...props}>
      {
        _.range(5).map((i) => {
          if (i < halfs - 0.5) {
            return <FullStar key={i} color={color} />
          } else if (i < halfs) {
            return <HalfStar key={i} color={color} />
          } else {
            return <EmptyStar key={i} color={color} />
          }
        })
      }
    </div>
  )
}

export default RatingStars
