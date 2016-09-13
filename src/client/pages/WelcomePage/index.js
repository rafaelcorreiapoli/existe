import React, { PropTypes } from 'react'
import CadastroCTA from '@components/CadastroCTA'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

const styles = {
  container: {
    display: 'flex',
  },
  leftPanel: {
    flexGrow: 1,
    flexBasis: 0,
  },
  rightPanel: {
    flexGrow: 1,
    flexBasis: 0,
  },
  divider: {
    width: 1,
    backgroundColor: '#b5b5bb',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
  columnLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingRight: 117,
    position: 'relative',
  },
  columnRight: {
    display: 'flex',
    //paddingTop: 25,
    alignItems: 'center',
    paddingLeft: 117,
    justifyContent: 'center',
  },
}
class WelcomePage extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    const { children } = this.props
    return (
      <Grid>
        <Row style={{ height: 800 }}>
          <Col xs={12} md={6} lg={6} style={styles.columnLeft}>
            <CadastroCTA md={6} />
            <div style={styles.divider} />
          </Col>
          <Col xs={12} md={6} lg={6} style={styles.columnRight}>
            <div style={{ width: 400 }}>
              {children}
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default WelcomePage
