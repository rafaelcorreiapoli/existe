import React, { Component } from 'react';
import { Drawer, MenuItem } from 'material-ui';

import RaisedButton from 'material-ui/RaisedButton';

import { fade } from 'material-ui/utils/colorManipulator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Button from '../Button'
import ProjetoCard from '../ProjetoCard'


import Login from '../../containers/Login';
import CriarProjeto from '../../containers/CriarProjeto';
import CadastroEmpresarial from '../../containers/CadastroEmpresarial';
import CadastroPessoal from '../../containers/CadastroPessoal';

import RatingStars from '../../components/RatingStars';
import UsuarioCard from '../../components/UsuarioCard';
import CadastroCTA from '../../components/CadastroCTA';
import { Link } from 'react-router'


import {
  Todos,
  EmCriacao,
  EmDesenvolvimento,
  EmProducao,
  Busca
} from '../../resources/icons'

import AppBar from '../AppBar';

import './style.css'
import 'flexboxgrid/css/flexboxgrid.css'
import { ACCENT } from '../../resources/colors'

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: ACCENT,
    primary2Color: 'green',
    primary3Color: 'blue',
    accent1Color: '#e36a55',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#e36a55',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },

  raisedButton: {
    color: 'white'
  },
  appBar: {
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    height: 80,
    color: 'white'
  },
  tabs: {
    backgroundColor: 'white',
    textColor: darkBlack,
    alternateTextColor: darkBlack,
  },
  tab: {
    textColor: darkBlack,
    alternateTextColor: darkBlack,
  },
  datePicker: {
    selectColor: ACCENT
  }
});




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    console.log(this.props.children);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <Link to='/busca'>
              <MenuItem leftIcon={<Busca />}>Busca</MenuItem>
            </Link>
            <Link to='/comunidade'>
              <MenuItem leftIcon={<Todos />}>Comunidade</MenuItem>
            </Link>
            <Link to='/mural'>
              <MenuItem leftIcon={<Todos />}>Mural</MenuItem>
            </Link>
          </Drawer>
          <AppBar onClickToggleMenu={this.handleToggle} />
          <div>
            {React.cloneElement(this.props.children)}
          </div>
        </div>
        {/*<div>
          <AppBar />
          <Login />
          <ResetPasswordForm />
          <CadastroCTA />*/}
          {/*<CadastroEmpresarial />*/}
          {/*<CadastroPessoal />*/}
          {/*<div>
            <div style={{display: 'flex'}}>
              <SelecionarAreaHint />
              <FiltroArea />
              <FiltroStatus />
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: 30, paddingBottom: 30}}>
              <BotaoNovoProjeto />
              <FiltroCategoria />
              <FiltroOrdem />
            </div>
          </div>
          <MuralProjetos />*/}
        {/*</div>*/}
      </MuiThemeProvider>
    );
  }
}




{/*<div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 80, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: '#d3d3d3', borderStyle: 'solid'}}>
<Icon name={'bars'} style={{fontSize: 30,}} />
<div style={{display: 'flex', alignItems: 'center'}}>
<Image
style={{width: 50, height: 50, marginRight: 10}}
src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/OS_X_El_Capitan_logo.svg/1024px-OS_X_El_Capitan_logo.svg.png'/>
<span style={{fontSize: 30, marginRight: 5}}>EXISTE</span>
<span style={{fontSize: 30, color: '#e36a55'}}>MURAL</span>
</div>
<Image
style={{height: 80, width: 80}}
src='http://www.wayfar.com.au/wp-content/uploads/2014/08/team3.jpg'/>
</div>*/}
{/*<div style={{
  display: 'flex',
  justifyContent: 'space-around',
  paddingTop: 50,
  paddingBottom: 50,
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 2,
  borderColor: '#d3d3d3',
  borderStyle: 'solid'
  }}>
  <RaisedButton label="MÚSICOS AQUI"/>
  <RaisedButton label="LOCAÇÕES AQUIS" />
  <RaisedButton label="PARCEIROS AQUI" />
  </div>*/}
