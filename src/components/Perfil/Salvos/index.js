import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ACCENT } from '../../../resources/colors'

export Videos from './Videos'
export Projetos from './Projetos'

const styles = {
  title: {
    textAlign: 'center'
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}

const TabLabel = ({
  label,
  number
}) => (
  <div>
    {label}
    <span style={{color: ACCENT}}> ({number})</span>
  </div>
)
const Salvos = ({
  videosCount = 0,
  projetosCount = 0,
  onVideosClick,
  onProjetosClick,
  children,
  routes,
  ...props
}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Salvos</h1>
      <Tabs style={{width: '100%'}} value={routes[routes.length - 1].path}>
        <Tab label={<TabLabel label={'videos'} number={videosCount} />} onActive={onVideosClick} value="videos" />
        <Tab label={<TabLabel label={'projetos'} number={projetosCount} />} onActive={onProjetosClick} value="projetos" />
      </Tabs>
      <div>
        {children}
      </div>
  </div>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVideosClick() {
      dispatch(push('/perfil/salvos/videos'))
    },
    onProjetosClick() {
      dispatch(push('/perfil/salvos/projetos'))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Salvos)
