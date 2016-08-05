import React from 'react';
import { connect } from 'react-redux'
import { setFiltroArea } from '../../actions'
import SelecionarArea from '../../components/SelecionarArea'
import { Texto } from '../../resources/icons';
//
// {
//   noAction: true,
//   text: 'TEXTO',
//   value: 'texto',
//   icon: <Texto color={'#61c785'} />,
//   menuItems: [
//     {
//       text: 'HISTÓRIA',
//       value: 'historia'
//     },
//     {
//       text: 'ROTEIRISTA',
//       value: 'roteirista'
//     },
//     {
//       text: 'TRADUTOR',
//       value: 'tradutor'
//     }
//   ]
// },
// {

const buildTree = (areas, cargos) => {
  return areas.map(area => {
    return {
      noAction: true,
      text: area.get('nome'),
      value: area.get('nome'),
      icon: <Texto />,
      menuItems: cargos.filter(cargo => cargo.get('areaId') === area.get('id')).map(cargo => {
        return {
          text: cargo.get('nome'),
          value: cargo.get('nome')
        }
      }).toArray()
    }
  }).toArray()
}
const mapStateToProps = (state) => {
  return {
    value: state.mural.filtros.area,
    options: buildTree(state.collections.areas, state.collections.cargos)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(area) {
      dispatch(setFiltroArea(area));
    }
  }
}

const FiltroArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecionarArea)

export default FiltroArea
