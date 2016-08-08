import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import Radium from 'radium'
import { ACCENT } from '../../resources/colors'
const RadiumPaper = Radium(Paper);

const selectedStyle = {
  backgroundColor: ACCENT,
  color: 'white'
}

const PaperSelect = ({
  options,
  value,
  onChange
}) => {


  return (
    <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {
        options.map(option => {
          const isSelected = value === option.value;
          return (
            <RadiumPaper
              key={option.value}
              onClick={() => {
                console.log(option.value)
                onChange(option.value)
              }}
              style={
                Object.assign({},
                  {padding: 10, cursor: 'pointer', margin: 10, marginLeft: 15, marginRight: 15},
                  isSelected && selectedStyle)
                }>
              <span>
                  {option.label}
              </span>

            </RadiumPaper>
          )
      })
      }
    </div>
  )
}

export default Radium(PaperSelect)
