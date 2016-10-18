import React, { PropTypes } from 'react'
import collapseHOC from '@components/CollapseHOC'
import { Field } from 'redux-form'
import CollapseToggle from '@components/CollapseToggle'
import Checkbox from 'material-ui/Checkbox'

export class CheckboxList extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    handleCheck: PropTypes.func,
    values: PropTypes.object,
  }

  render() {
    const {
      options,
      handleCheck,
      values = {},
    } = this.props

    return (
      <div>
        {
          options.map(option => (
            <Checkbox
              key={option.value}
              checked={values.get(option.value, false)}
              onCheck={(e, checked) => handleCheck(option.value, checked)}
              label={option.label}
            />
          ))
        }
      </div>
    )
  }
}

const styles = {
  label: {

  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}
class FiltroInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    collapse: PropTypes.bool,
    toggleCollapse: PropTypes.func,
    options: PropTypes.array,
    handleCheck: PropTypes.func,
    values: PropTypes.object,
    component: PropTypes.element,
  }

  render() {
    const {
      label,
      onToggle,
      component,
      expanded,
    } = this.props
    return (
      <div>
        <div style={styles.labelContainer}>
          <span style={styles.label}>{label}</span>
          <CollapseToggle
            onToggle={onToggle}
            expanded={expanded}
          />
        </div>
        {/* <Collapse isOpened={expanded} style={{ display: 'block'}}> */}
            {expanded && component}
        {/* </Collapse> */}
      </div>
    )
  }
}

export default collapseHOC(FiltroInput)
