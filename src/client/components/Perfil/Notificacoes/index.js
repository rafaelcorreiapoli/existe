import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ACCENT } from '@resources/colors'

export Convites from './Convites'
export Marcacoes from './Marcacoes'


const styles = {
  title: {
    textAlign: 'center',
    marginTop: 30
  },
  titleContainer: {
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'relative'
  },
  tabs: {
    height: 50,
    width: '100%'
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
const Notificacoes = ({
  marcacoesCount = 0,
  convitesCount = 0,
  onMarcacoesClick,
  onConvitesClick,
  children,
  routes,
  ...props
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.titleContainer}>
          <h1 style={styles.title}>Notificações</h1>
        </div>
        <Tabs style={{width: '100%'}} value={routes[routes.length - 1].path}>
          <Tab label={<TabLabel label={'Marcacoes'} number={marcacoesCount} />} onActive={onMarcacoesClick} value="marcacoes" />
          <Tab label={<TabLabel label={'Convites'} number={convitesCount} />} onActive={onConvitesClick} value="convites" />
        </Tabs>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
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
    onMarcacoesClick() {
      dispatch(push('/perfil/notificacoes/marcacoes'))
    },
    onConvitesClick() {
      dispatch(push('/perfil/notificacoes/convites'))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notificacoes)
