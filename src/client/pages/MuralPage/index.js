import React, { PropTypes } from 'react'
import FiltroArea from '../../containers/FiltroArea';
import FiltroCategoria from '../../containers/FiltroCategoria';
import FiltroOrdem from '../../containers/FiltroOrdem';
import FiltroStatus from '../../containers/FiltroStatus';
import MuralProjetos from '../../containers/MuralProjetos';
import BotaoNovoProjeto from '../../components/BotaoNovoProjeto';
import SelecionarAreaHint from '../../components/SelecionarAreaHint';
import { Grid } from 'react-flexbox-grid'

const MuralPage = ({

}) => {
  return (
    <div style={{maxWidth: 1600, margin: 'auto'}}>
        <div style={{display: 'flex'}}>
          <SelecionarAreaHint />
          <FiltroArea/>
          <FiltroStatus />
        </div>

        <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: 30, paddingBottom: 30}}>
          <BotaoNovoProjeto  style={{marginRight: 20}}/>
          <FiltroCategoria  style={{marginRight: 20}}/>
          <FiltroOrdem />
        </div>
        <MuralProjetos />

    </div>
  )
}

export default MuralPage
