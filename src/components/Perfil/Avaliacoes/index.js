import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ACCENT } from '../../../resources/colors'

export Feitas from './Feitas'
export Recebidas from './Recebidas'

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
const Avaliacoes = ({
  feitasCount = 0,
  recebidasCount = 0,
  onFeitasClick,
  onRecebidasClick,
  children,
  routes,
  ...props
}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Avaliações</h1>
      <Tabs style={{width: '100%'}} value={routes[routes.length - 1].path}>
        <Tab label={<TabLabel label={'Recebidas'} number={recebidasCount} />} onActive={onRecebidasClick} value="recebidas" />
        <Tab label={<TabLabel label={'Feitas'} number={feitasCount} />} onActive={onFeitasClick} value="feitas" />
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
    onFeitasClick() {
      dispatch(push('/perfil/avaliacoes/feitas'))
    },
    onRecebidasClick() {
      dispatch(push('/perfil/avaliacoes/recebidas'))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avaliacoes)
