import React, { PropTypes } from 'react'
import DatePicker from 'material-ui/DatePicker'
import moment from 'moment'

const DateInput = ({
  label,
  meta: {
    error,
    touched
  },
  input,
  ...props
}) => (
  <DatePicker
    fullWidth={true}
    floatingLabelText={label}
    floatingLabelFixed={true}
    value={input.value ? moment(input.value).toDate() : null }
    onChange={(e,d) => input.onChange(d)}
    {...props}
  />
)

export default DateInput
