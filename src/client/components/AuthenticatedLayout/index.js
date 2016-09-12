import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DrawerContainer from '@containers/DrawerContainer'
import AppBarContainer from '@containers/AppBarContainer';
import { setInsertBotDialogOpen } from '@ducks/layout'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import InsertBotForm from '@components/InsertBotForm'


class AuthenticatedLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    insertBotDialogOpen: PropTypes.bool,
    handleRequestClose: PropTypes.func,
  }

  render() {
    const {
      children,
      insertBotDialogOpen,
      handleRequestClose,
      handleSubmit,
      invalid,
    } = this.props

    return (
      <div>
        <DrawerContainer />
        <AppBarContainer />
        <div style={{ marginTop: 100 }}>
          {children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  insertBotDialogOpen: state.layout.get('insertBotDialogOpen'),
  invalid: (state.form && state.form.newBot) && !!state.form.newBot.syncErrors || false,
})
const mapDispatchToProps = dispatch => ({
  handleRequestClose(open) {
    console.log('handle')
    dispatch(setInsertBotDialogOpen(open))
  },
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedLayout)
