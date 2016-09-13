import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DrawerContainer from '@containers/DrawerContainer'
import AppBarContainer from '@containers/AppBarContainer';
import { setInsertBotDialogOpen } from '@ducks/layout'
import { Tabs, Tab } from 'material-ui/Tabs'

const styles = {
  container: {
    maxWidth: 1200,
    margin: 'auto',
    //marginTop: 100,
  },
  tabsContainer: {
    borderBottom: '1px solid #e5e5e5',
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
    } = this.props

    return (
      <div>
        <DrawerContainer />
        <AppBarContainer />
        <div style={styles.tabsContainer}>
          <Tabs style={styles.tabs}>
            <Tab
              style={styles.tab}
              label="Comunidade"
            />
            <Tab
              style={styles.tab}
              label="Produções"
            />
            <Tab
              style={styles.tab}
              label="Mural"
            />
            <Tab
              style={styles.tab}
              label="Colaborar"
            />
          </Tabs>
        </div>
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
