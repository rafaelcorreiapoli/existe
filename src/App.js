import React, { Component } from 'react';
import Button from './components/Button'
import FiltroCategoria from './components/FiltroCategoria'
import Select from './components/Select'
import IconButton from './components/IconButton'
import ProjetoCard from './components/ProjetoCard'
import './style.css'

const {Grid, Row, Col} = require('react-flexbox-grid/lib');

export default class App extends Component {
  render() {
    return (
      <div className="teste">
              <ProjetoCard
                numeroColaboradores={10}
                nome={'EXTRA | GRAFITE COLETIVO asdasd asssssssda'}
                nomeUsuario={'EXISTEemSP'}
                data={'Março 31, 2016'}
                numeroUsers={12}
                numeroComentarios={25}
                numeroLikes={20}
                temVagas={true}
                trending={true}
                colaborando={true}
                salvou={true}
                seguindo={true}
                favoritou={true}
                marcado={true}
                marcadoNovo={true}
                convidado={true}
                convidadoNovo={false}
              />

            <FiltroCategoria />
      </div>
    );
  }
}
