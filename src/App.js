import React, { Component } from 'react';
import Button from './components/Button'
import FiltroCategoria from './components/FiltroCategoria'
import OrdenarProjetos from './components/OrdenarProjetos'
import FiltroArea from './components/FiltroArea'
import { Tabs, TabItem} from './components/FiltroStatusProjeto'
import Select from './components/Select'
import IconButton from './components/IconButton'
import ProjetoCard from './components/ProjetoCard'
import { Icon } from 'react-fa';
import { Image } from 'react-bootstrap';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const {Grid, Row, Col} = require('react-flexbox-grid/lib');

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
      menu : ''
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
    this.setState({
      menu: val
    });
  }
  render() {
    const { filtro, criterio, area, status, menu } = this.state
    return (
      <div>
        {/*<div style={{width: 400, display: 'inline-block'}}>
        <ProjetoCard
        image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
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
        </div>
        <FiltroCategoria
        value={filtro}
        onClick={this.handleClick}/>

        <OrdenarProjetos
        value={criterio}
        onClick={this.handleClickOrdenar}/>
        <FiltroArea
        value={area}
        onClick={this.handleClickArea}/>*/}
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 80, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: '#d3d3d3', borderStyle: 'solid'}}>
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
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: '#d3d3d3', borderStyle: 'solid'}}>
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
        </div>


        <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: 50, paddingBottom: 50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: '#d3d3d3', borderStyle: 'solid'}}>
          <Button style={{width: 300}}>
            MÚSICOS AQUI
          </Button>
          <Button style={{width: 300}}>
            LOCAÇÕES AQUI
          </Button>
          <Button style={{width: 300}}>
            PARCEIROS AQUI
          </Button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: '#d3d3d3', borderStyle: 'solid'}}>
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
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: 30, paddingBottom: 30}}>
          <Button style={{width: 300, color: '#e36a55', borderWidth: 0}}>
            <Icon name={'plus-circle'} style={{marginRight: 20, fontSize: 30}}/>
            CRIAR NOVO PROJETO
          </Button>
          <FiltroCategoria
          value={filtro}
          onClick={this.handleClick}
          />

          <OrdenarProjetos
            value={criterio}
            onClick={this.handleClickOrdenar}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', maxWidth: 1600, margin: 'auto'}}>
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
