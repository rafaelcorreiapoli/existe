import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

const styles = {
  tabsContainer: {
    borderBottom: '1px solid #e5e5e5',
  },
}

class TabNav extends React.Component {
  static propTypes = {
    navigate: PropTypes.func,
    selectedTab: PropTypes.string,
  }
  render() {
    const {
      navigate,
      selectedTab,
    } = this.props
    return (
      <div style={styles.tabsContainer}>
        <Tabs
          style={styles.tabs}
          value={selectedTab}
          onChange={(value) => navigate(value)}
        >
          <Tab
            style={styles.tab}
            value="comunidade"
            label="Comunidade"
          />
          <Tab
            value="producoes"
            style={styles.tab}
            label="Produções"
          />
          <Tab
            style={styles.tab}
            value="mural"
            label="Mural"
          />
          <Tab
            style={styles.tab}
            value="guia-de-precos"
            label="Guia de preços"
          />
        </Tabs>
      </div>
    )
  }
}

export default TabNav;
