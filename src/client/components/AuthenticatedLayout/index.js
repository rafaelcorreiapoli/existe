import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DrawerContainer from '@containers/DrawerContainer'
import AppBarContainer from '@containers/AppBarContainer';

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
    location: PropTypes.object,
  }

  render() {
    const {
      children,
      location: {
        pathname,
      },
    } = this.props

    const decideSelectedTab = (p) => {
      return p.substr(0, 1) === '/' ? p.substr(1, p.length) : p
    }

    return (
      <div>
        <DrawerContainer />
        <AppBarContainer />
        <TabNav selectedTab={decideSelectedTab(pathname)} />
        <div style={styles.container}>
          {children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedLayout)
