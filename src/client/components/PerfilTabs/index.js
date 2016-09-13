import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { ACCENT } from '@resources/colors'

const styles = {
  title: {
    textAlign: 'center',
    margin: 0,
    fontSize: 18,
  },
  titleContainer: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 118,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'relative',
  },
  tabs: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottom: '1px solid #e5e5e5',
  },
}


const TabLabel = ({
  label,
  number,
}) => (
  <div>
    {label}
    <span style={{ color: ACCENT }}> ({number})</span>
  </div>
)
TabLabel.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number,
}

class PerfilTabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    children: PropTypes.node,
    title: PropTypes.string,
    activeTab: PropTypes.string,
  }

  render() {
    const {
      tabs,
      children,
      title,
      activeTab,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>{title}</h1>
          </div>

          <Tabs style={styles.tabs} value={activeTab}>
            {
              tabs.map(tab => (
                <Tab
                  style={styles.tab}
                  label={<TabLabel label={tab.label} number={tab.count} />}
                  onActive={tab.onClick} value={tab.value}
                />
              ))
            }
          </Tabs>

        </div>
        <div style={{ height: '100%', padding: 50 }}>
          {children}
        </div>
      </div>
    )
  }
}

export default PerfilTabs;
