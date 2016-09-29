import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import PerfilTabs from '@components/PerfilTabs'

export Feitas from './Feitas'
export Recebidas from './Recebidas'

class Avaliacoes extends React.Component {
  static propTypes = {
    recebidasCount: PropTypes.number,
    feitasCount: PropTypes.number,
    onRecebidasClick: PropTypes.func,
    onFeitasClick: PropTypes.func,
    children: PropTypes.node,
    routes: PropTypes.array,
  }
  render() {
    const {
      recebidasCount = 0,
      feitasCount = 0,
      onRecebidasClick,
      onFeitasClick,
      children,
      routes,
      ...props,
    } = this.props

    const tabs = [
      {
        label: 'Feitas',
        value: 'feitas',
        count: feitasCount,
        onClick: onFeitasClick,
      },
      {
        label: 'Recebidas',
        value: 'recebidas',
        count: recebidasCount,
        onClick: onRecebidasClick,
      },
    ]

    return (
      <PerfilTabs
        tabs={tabs}
        title={'Avaliações'}
        activeTab={routes[routes.length - 1].path}
      >
        {children}
      </PerfilTabs>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRecebidasClick() {
      dispatch(push('/perfil/avaliacoes/recebidas'))
    },
    onFeitasClick() {
      dispatch(push('/perfil/avaliacoes/feitas'))
    },
    onPerfisClick() {
      dispatch(push('/perfil/salvos/perfis'))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avaliacoes)


// import React, { PropTypes } from 'react'
// import { Tabs, Tab } from 'material-ui/Tabs';
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
// import { ACCENT } from '@resources/colors'
//
// export Feitas from './Feitas'
// export Recebidas from './Recebidas'
//
// const styles = {
//   title: {
//     textAlign: 'center',
//     marginTop: 30
//   },
//   titleContainer: {
//     height: 120,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   container: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   header: {
//     position: 'relative'
//   },
//   tabs: {
//     height: 50,
//     width: '100%'
//   }
// }
//
// const TabLabel = ({
//   label,
//   number
// }) => (
//   <div>
//     {label}
//     <span style={{color: ACCENT}}> ({number})</span>
//   </div>
// )
// const Avaliacoes = ({
//   feitasCount = 0,
//   recebidasCount = 0,
//   onFeitasClick,
//   onRecebidasClick,
//   children,
//   routes,
//   ...props
// }) => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <div style={styles.titleContainer}>
//           <h1 style={styles.title}>Avaliações</h1>
//         </div>
//         <Tabs style={{width: '100%'}} value={routes[routes.length - 1].path}>
//           <Tab label={<TabLabel label={'Recebidas'} number={recebidasCount} />} onActive={onRecebidasClick} value="recebidas" />
//           <Tab label={<TabLabel label={'Feitas'} number={feitasCount} />} onActive={onFeitasClick} value="feitas" />
//         </Tabs>
//       </div>
//       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
//         {children}
//   )
// }
//
//
// const mapStateToProps = (state) => {
//   return {
//
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFeitasClick() {
//       dispatch(push('/perfil/avaliacoes/feitas'))
//     },
//     onRecebidasClick() {
//       dispatch(push('/perfil/avaliacoes/recebidas'))
//     },
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Avaliacoes)
