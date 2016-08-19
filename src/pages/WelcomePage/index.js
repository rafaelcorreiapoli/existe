import React, { PropTypes } from 'react'
import CadastroCTA from '../../components/CadastroCTA'
import  { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

const styles = {
  container: {
    display: 'flex'
  },
  leftPanel: {
    flexGrow: 1,
    flexBasis: 0
  },
  rightPanel: {
    flexGrow: 1,
    flexBasis: 0
  },
  divider: {
    width: 1,
    backgroundColor: '#eee',
    position: 'absolute',
    top:0,
    bottom:0,
    right: 0
  }
}
const WelcomePage = ({
  children
}) => {
  return (
    <Grid  style={{marginTop: 40}}>
      <Row style={{height: 800}}>
        <Col xs={12} md={6} lg={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  position: 'relative'}}>
            <CadastroCTA md={6}/>
            <div style={styles.divider} />
        </Col>
        <Col xs={12} md={6} lg={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{width: 400}}>
            {children}
          </div>
        </Col>
      </Row>
    </Grid>
    // <div style={styles.container}>
    //   <div style={styles.leftPanel}>
    //     <CadastroCTA />
    //   </div>
    //   <div style={styles.divider} />
    //   <div style={styles.rightPanel}>
    //     <div style={{width: 400}}>
    //       {children}
    //     </div>
    //   </div>
    //
    // </div>
  )
}

export default WelcomePage
