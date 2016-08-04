import React, { Component } from 'react';
import Button from './components/Button'
import FiltroCategoria from './components/FiltroCategoria'
import OrdenarProjetos from './components/OrdenarProjetos'
import FiltroArea from './components/FiltroArea'
//import { Tabs, TabItem} from './components/FiltroStatusProjeto'
import Select from './components/Select'
import IconButton from './components/IconButton'
import ProjetoCard from './components/ProjetoCard'
import { Icon } from 'react-fa';
import { Image } from 'react-bootstrap';
import './style.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs'
import {fade} from 'material-ui/utils/colorManipulator';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/content/add-circle-outline';

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
     primary2Color: cyan700,
     primary3Color: grey400,
     accent1Color: '#e36a55',
     accent2Color: grey100,
     accent3Color: grey500,
     textColor: darkBlack,
     alternateTextColor: darkBlack,
     canvasColor: white,
     borderColor: grey300,
     disabledColor: fade(darkBlack, 0.3),
     pickerHeaderColor: cyan500,
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
  }
});

const projetoCard =  {
  image:'http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg',
  numeroColaboradores: 10,
  nome: 'EXTRA | GRAFITE COLETIVO asdasd asssssssda',
  nomeUsuario: 'EXISTEemSP',
  data: 'Março 31, 2016',
  numeroUsers: 12,
  numeroComentarios: 25,
  numeroLikes: 20,
  temVagas: true,
  trending: true,
  colaborando: true,
  salvou: true,
  seguindo: true,
  favoritou: true,
  marcado: true,
  marcadoNovo: true,
  convidado: true,
  convidadoNovo: false,
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOrdenar = this.handleClickOrdenar.bind(this);
    this.handleClickArea = this.handleClickArea.bind(this);
    this.handleClickStatus = this.handleClickStatus.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);


    this.state = {
      filtro: '',
      criterio: '',
      area: '',
      menu : 'a'
    }
  }

  handleClick(val) {
    this.setState({
      filtro: val
    });
  }

  handleClickOrdenar(val) {
    this.setState({
      criterio: val
    });
  }

  handleClickArea(val) {
    this.setState({
      area: val
    });
  }

  handleClickStatus(val) {
    this.setState({
      status: val
    });
  }
  handleClickMenu(val) {
    console.log(val)
    this.setState({
      menu: val
    });
  }
  render() {
    const { filtro, criterio, area, status, menu } = this.state
    return (
       <MuiThemeProvider  muiTheme={muiTheme}>
       <div>
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
        <AppBar
          zDepth={0}
          titleStyle={{
            textAlign: 'center'
          }}
          title="EXISTE"
          style={{
            //backgroundColor: 'white',
            color: 'black'
          }}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      <Tabs
        value={menu}
        onChange={this.handleClickMenu}>
         <Tab label="COMUNIDADE" value={'a'}>
         </Tab>
         <Tab label="PRODUÇÕES" value={'b'} >
         </Tab>
         <Tab label="MURAL" value={'c'}>
         </Tab>
         <Tab label="COMO COLABORAR" value={'d'}>
         </Tab>
       </Tabs>
        {/*<div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: '#d3d3d3', borderStyle: 'solid'}}>
          <Tabs
            value={menu}
            onClick={this.handleClickMenu}
            >
            <TabItem
              value={'comunidade'}>
              <MenuItem
                text={'COMUNIDADE'} />
            </TabItem>
            <TabItem
              value={'producoes'}>
              <MenuItem
                text={'PRODUÇÕES'} />
            </TabItem>
            <TabItem
              value={'mural'}>
              <MenuItem
                text={'MURAL'} />

            </TabItem>
            <TabItem
              value={'colaborar'}>
              <MenuItem
                text={'COMO COLABORAR'} />
            </TabItem>
          </Tabs>
        </div>*/}


        <div style={{
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
          <RaisedButton label="MÚSICOS AQUI" />
          <RaisedButton label="LOCAÇÕES AQUIS" />
          <RaisedButton label="PARCEIROS AQUI" />

        </div>

        {/*<div style={{display: 'flex', justifyContent: 'center', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: '#d3d3d3', borderStyle: 'solid'}}>
          <FiltroArea
            value={area}
            onClick={this.handleClickArea}
          />
          <Tabs
            value={status}
            onClick={this.handleClickStatus}
            >
            <TabItem
              value={'criacao'}>
              <FiltroStatusItem
                icon="spinner"
                text="EM CRIAÇÃO"
                />
            </TabItem>
            <TabItem
              value={'desenvolvimento'}>
              <FiltroStatusItem
                icon="check-circle"
                text="EM DESENVOLVIMENTO"
                />
            </TabItem>
            <TabItem
              value={'producao'}>
              <FiltroStatusItem
                icon='play-circle'
                text="EM PRODUÇÃO"
                />
            </TabItem>
            <TabItem
              value={'pos_producao'}>
              <FiltroStatusItem
                icon="clock-o"
                text="PÓS PRODUÇÃO"
                />
            </TabItem>
          </Tabs>
        </div>*/}
        <div style={{maxWidth: 1600, margin: 'auto'}}>


          <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: 30, paddingBottom: 30}}>
            {/*<Button style={{width: 300, color: '#e36a55', borderWidth: 0, marginRight: 50}}>
              <Icon name={'plus-circle'} style={{marginRight: 20, fontSize: 30}}/>
              CRIAR NOVO PROJETO
            </Button>*/}
            <FlatButton
              label="CRIAR NOVO PROJETO"
              href="https://github.com/callemall/material-ui"
              secondary={true}
              icon={<ActionAndroid />}
            />
            <FiltroCategoria
            style={{marginRight: 50}}
            value={filtro}
            onClick={this.handleClick}
            />
            <OrdenarProjetos
              style={{marginRight: 50}}
              value={criterio}
              onClick={this.handleClickOrdenar}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', margin: 'auto'}}>
            <div style={{display: 'inline-flex', width: 300}}>
              <ProjetoCard
                {...projetoCard}
                />
            </div>
            <div style={{display: 'inline-flex', width: 300}}>
              <ProjetoCard
                {...projetoCard}
                />
            </div>
            <div style={{display: 'inline-flex', width: 300}}>
              <ProjetoCard
                {...projetoCard}
                />
            </div>
            <div style={{display: 'inline-flex', width: 300}}>
              <ProjetoCard
                {...projetoCard}
                />
            </div>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

const MenuItem = ({
  text
}) => (
  <div style={{padding: 30, fontSize: 20, height: '100%'}}>
    {text}
  </div>
)

const FiltroStatusItem = ({
  icon,
  text
}) => (
  <div style={{height: '100%', padding: 10, paddingLeft: 50, paddingRight: 50, width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Icon name={icon} style={{marginLeft: -10, marginRight: 10, fontSize: 30}}/>
    <span>{text}</span>
  </div>
)
