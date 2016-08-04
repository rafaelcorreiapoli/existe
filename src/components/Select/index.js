import React, { PropTypes } from 'react'
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css'

const Select = (props) => {
  return (
    <ReactSelect
      name="form-field-name"
      value="one"
      options={[
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ]}
    />
  )
}

export default Select
