import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import Radium from 'radium'

const RadiumPaper = Radium(Paper);

const selectedStyle = {
  backgroundColor: '#e36a55',
  color: 'white'
}

const PaperSelect = ({
  options,
  value,
  onChange
}) => {


  return (
    <div style={{width: '100%', display: 'flex', 'flex-wrap': 'wrap', justifyContent: 'space-around'}}>
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
                  {padding: 10, cursor: 'pointer', margin: 5},
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
