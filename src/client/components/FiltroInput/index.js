import React, { PropTypes } from 'react'
import collapseHOC from '@components/CollapseHOC'
import { Field } from 'redux-form'
import CollapseToggle from '@components/CollapseToggle'
import Checkbox from 'material-ui/Checkbox'

const styles = {
  label: {

  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}
class FiltroInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    collapse: PropTypes.bool,
    toggleCollapse: PropTypes.func,
    options: PropTypes.array,
    formKey: PropTypes.string,
    handleCheck: PropTypes.func,
    values: PropTypes.object,
  }

  renderListaCheckbox() {
    const {
      options,
      collapse,
      handleCheck,
      values = {},
    } = this.props

    if (collapse) {
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

    return null
  }
  render() {
    const {
      label,
      toggleCollapse,
      collapse,
      values,
    } = this.props

    return (
      <div>
        <div style={styles.labelContainer}>
          <span style={styles.label}>{label}</span>
          <CollapseToggle
            onToggle={toggleCollapse}
            collapse={collapse}
          />
      </div>

        {this.renderListaCheckbox()}
      </div>
    )
  }
}

export default collapseHOC(FiltroInput)
