import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import { Deletar } from '@resources/icons'
import { ACCENT } from '@resources/colors'

const styles = {
  deleteButton: {

  },
  deleteIcon: {
    color: ACCENT,
  },
}
class RemoveButton extends React.Component {
  static propTypes = {

  }
  render() {
    return (
      <IconButton
        tooltip="Remover"
        style={styles.deleteButton}
        iconStyle={styles.deleteIcon}
        {...this.props}
      >
        <Deletar />
      </IconButton>
    )
  }
}

export default RemoveButton;
