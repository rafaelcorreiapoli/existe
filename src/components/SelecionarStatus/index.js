import React, { PropTypes } from 'react'
import styles from './styles';
import { Tabs, Tab } from 'material-ui/Tabs'
import { Todos, EmCriacao, EmDesenvolvimento, EmProducao, EmPosProducao } from '../../resources/icons';
import Radium from 'radium';

const SelecionarStatus = ({
  value,
  onChange,
  style,
  ...props
}) => {
  return (
    <Tabs
      style={{...style, width: '100%'}}
      value={value}
      onChange={onChange}
      {...props}
    >
       <Tab
         icon={<Todos />}
         label="TODOS PROJETOS" value={'todos'}>
       </Tab>
       <Tab
         icon={<EmCriacao />}
         label="EM CRIAÇÃO" value={'criacao'} >
       </Tab>
       <Tab
         icon={<EmDesenvolvimento />}
         label="EM DESENVOLVIMENTO" value={'desenvolvimento'}>
       </Tab>
       <Tab
         icon={<EmProducao />}
         label="EM PRODUÇÃO" value={'producao'}>
       </Tab>
       <Tab
         icon={<EmPosProducao />}
         label="EM PÓS-PRODUÇÃO" value={'pos_producao'}>
       </Tab>
     </Tabs>
  )
}

export default Radium(SelecionarStatus);
