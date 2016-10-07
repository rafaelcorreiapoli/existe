import React, { PropTypes } from 'react'
import {
  realizarBusca,
  setTexto,
  getUsuarios,
  getTexto,
  getError,
  unregister,
  register,
} from '@ducks/buscaUsuario'
import { connect } from 'react-redux'

export default (ComposedComponent, searchId) => {
  const mapStateToProps = (state, ownProps) => ({
    usuarios: getUsuarios(state, ownProps.searchId),
    texto: getTexto(state, ownProps.searchId),
    error: getError(state, ownProps.searchId),
  })

  const mapDispatchToProps = (dispatch, ownProps) => ({
    setTexto(texto) {
      dispatch(setTexto(ownProps.searchId, texto))
      dispatch(realizarBusca(ownProps.searchId))
    },
    unregister() {
      dispatch(unregister(ownProps.searchId))
    },
    register() {
      dispatch(register(ownProps.searchId, ownProps.type))
    },
  })

  class Component extends React.Component {

    static propTypes = {
      realizarBusca: PropTypes.func,
      usuarios: PropTypes.array,
      error: PropTypes.bool,
      texto: PropTypes.string,
      unregister: PropTypes.func,
    }

    constructor(props) {
      super(props)

      this.state = {
        usuarios: [],
      }
    }


    componentDidMount() {
      const {
        register,
      } = this.props

      register()
    }

    componentWillUnmount() {
      const {
        unregister,
      } = this.props

      unregister()
    }

    render() {
      // const {
      //   realizarBusca,
      //   usuarios,
      //   error,
      //   texto,
      //   ...props,
      // } = this.props

      return (
        <ComposedComponent
          {...this.props}
          // {...this.state}
          // realizarBusca={realizarBusca}
          // usuarios={usuarios}
          // texto={texto}
          // error={error}
        />
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
}
