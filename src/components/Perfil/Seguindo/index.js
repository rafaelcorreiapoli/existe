import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ACCENT } from '../../../resources/colors'
export Feed from './Feed'
export Pessoas from './Pessoas'
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
const Seguindo = ({
  feedCount = 0,
  projetosCount = 0,
  pessoasCount = 0,
  onFeedClick,
  onProjetosClick,
  onPessoasClick,
  children,
  routes,
  ...props
}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seguindo</h1>
      <Tabs style={{width: '100%'}} value={routes[routes.length - 1].path}>
        <Tab label={<TabLabel label={'Feed'} number={feedCount} />} onActive={onFeedClick} value="feed" />
        <Tab label={<TabLabel label={'Projetos'} number={projetosCount} />} onActive={onProjetosClick} value="projetos" />
        <Tab label={<TabLabel label={'Pessoas'} number={pessoasCount} />} onActive={onPessoasClick} value="pessoas" />
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
    onFeedClick() {
      dispatch(push('/perfil/seguindo/feed'))
    },
    onProjetosClick() {
      dispatch(push('/perfil/seguindo/projetos'))
    },
    onPessoasClick() {
      dispatch(push('/perfil/seguindo/pessoas'))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Seguindo)
