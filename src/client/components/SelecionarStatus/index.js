import React, { PropTypes } from 'react'
import Radium from 'radium';
import { Todos, EmCriacao, EmDesenvolvimento, EmProducao, EmPosProducao } from '@resources/icons';
import { Tabs, Tab } from 'material-ui/Tabs'
import styles from './styles';

const SelecionarStatus = ({
  value,
  onChange,
  style,
  ...props,
}) => {
  return (
    <Tabs
      style={{ ...style, width: '100%' }}
      value={value}
      onChange={onChange}
      {...props}
    >
      <Tab
        icon={<Todos />}
        label="TODOS PROJETOS" value={undefined}
      />
      <Tab
        icon={<EmCriacao />}
        label="EM CRIAÇÃO" value={'criacao'}
      />
      <Tab
        icon={<EmDesenvolvimento />}
        label="EM DESENVOLVIMENTO" value={'desenvolvimento'}
      />
      <Tab
        icon={<EmProducao />}
        label="EM PRODUÇÃO" value={'producao'}
      />
      <Tab
        icon={<EmPosProducao />}
        label="EM PÓS-PRODUÇÃO" value={'pos-producao'}
      />
    </Tabs>
  )
}

export default Radium(SelecionarStatus);
