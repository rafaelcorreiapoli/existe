import React, { PropTypes } from 'react'
import { Adicionar } from '@resources/icons'
import FlatButton from 'material-ui/FlatButton';

const BotaoNovoProjeto = ({
  onClick,
  style,
  ...props
}) => {
  return (
    <FlatButton
      style={style}
      label="CRIAR NOVO PROJETO"
      secondary
      icon={<Adicionar />}
      {...props}
    />

  )
}


export default BotaoNovoProjeto
