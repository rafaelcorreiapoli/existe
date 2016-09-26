import React from 'react';
import { connect } from 'react-redux'
import { setFiltroArea } from '@ducks/mural'
import SelecionarArea from '@components/SelecionarArea'
import { Texto } from '@resources/icons';


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
          value: cargo.get('nome'),
        }
      }).toArray(),
    }
  })
}
const mapStateToProps = (state) => {
  return {
    value: state.mural.area,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(area) {
      dispatch(setFiltroArea(area));
    },
  }
}

const FiltroArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecionarArea)

export default FiltroArea
