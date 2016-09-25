import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DrawerContainer from '@containers/DrawerContainer'
import AppBarContainer from '@containers/AppBarContainer';
import { setInsertBotDialogOpen } from '@ducks/layout'

import TabNav from '@containers/TabNav'

const styles = {
  container: {
    maxWidth: 1200,
    margin: 'auto',
    //marginTop: 100,
  },
  tabs: {
    height: 48,
    maxWidth: 1200,
    margin: 'auto',
  },
  tab: {
    fontSize: '12pt',
  },
}
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
      navigate,
      selectedTab,
      ...props
    } = this.props

    console.log(props)

    return (
      <div>
        <DrawerContainer />
        <AppBarContainer />
        <TabNav />
        <div style={styles.container}>
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
