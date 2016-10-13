import React from 'react';
import { connect } from 'react-redux'
import { setFiltroFuncao } from '@ducks/mural'
import SelecionarFuncao from '@components/SelecionarFuncao'
import { Texto } from '@resources/icons';


// const buildTree = (areas, cargos) => {
//   return areas.map(area => {
//     return {
//       noAction: true,
//       text: area.get('nome'),
//       value: area.get('nome'),
//       icon: <Texto />,
//       menuItems: cargos.filter(cargo => cargo.get('areaId') === area.get('id')).map(cargo => {
//         return {
//           text: cargo.get('nome'),
//           value: cargo.get('nome'),
//         }
//       }).toArray(),
//     }
//   })
// }
const mapStateToProps = (state) => {
  return {
    value: state.mural.funcao,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(funcao) {
      dispatch(setFiltroFuncao(funcao));
    },
  }
}

const FiltroFuncao = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecionarFuncao)

export default FiltroFuncao
