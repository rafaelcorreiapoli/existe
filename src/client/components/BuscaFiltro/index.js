import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FILTRO_CATEGORIAS, FILTRO_SUBCATEGORIAS, FILTRO_TIMES } from '@resources/options'
import FiltroInput from '@components/FiltroInput'
import Divider from 'material-ui/Divider'

import {
  TextField,
  Checkbox
} from 'redux-form-material-ui'

import { Busca } from '@resources/icons'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    //  justifyContent: 'center',
  },
  divider: {
    alignSelf: 'stretch',
  },
}



class BuscaFiltro extends React.Component {
  static propTypes = {
    categoria: PropTypes.object,
    subcategoria: PropTypes.object,
    times: PropTypes.object,
    onChangeCategoria: PropTypes.func,
    onChangeSubcategoria: PropTypes.func,
    onChangeTimes: PropTypes.func,
  }
  render() {
    const {
      categoria,
      subcategoria,
      times,
      onChangeCategoria,
      onChangeSubcategoria,
      onChangeTimes,
    } = this.props

    return (
      <div style={styles.container}>
        <FiltroInput
          label="Categoria"
          formKey="categoria"
          options={FILTRO_CATEGORIAS}
          values={categoria}
          handleCheck={onChangeCategoria}
        />
        <Divider style={styles.divider} />
        <FiltroInput
          label="Subcategoria"
          formKey="subcategoria"
          options={FILTRO_SUBCATEGORIAS}
          values={subcategoria}
          handleCheck={onChangeSubcategoria}
        />
        <Divider style={styles.divider} />
        <FiltroInput
          label="Times"
          formKey="times"
          options={FILTRO_TIMES}
          values={times}
          handleCheck={onChangeTimes}
        />
        <Divider style={styles.divider} />
      </div>
    )
  }
}


export default reduxForm({
  form: 'busca',
  destroyOnUnmount: false,
})(BuscaFiltro)
