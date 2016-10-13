import React, { PropTypes } from 'react'
import FiltroFuncao from '@containers/FiltroFuncao';
import FiltroCategoria from '@containers/FiltroCategoria';
import FiltroOrdem from '@containers/FiltroOrdem';
import FiltroStatus from '@containers/FiltroStatus';
import MuralProjetos from '@containers/MuralProjetos';
import BotaoNovoProjeto from '@components/BotaoNovoProjeto';
import SelecionarAreaHint from '@components/SelecionarAreaHint';


class MuralPage extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 1600, margin: 'auto' }}>
        <div style={{ display: 'flex' }}>
          <SelecionarAreaHint />
          <FiltroFuncao />
          <FiltroStatus />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 30, paddingBottom: 30 }}>
          <BotaoNovoProjeto style={{ marginRight: 20 }} />
          <FiltroCategoria style={{ marginRight: 20 }} />
          <FiltroOrdem />
        </div>
        <MuralProjetos />
      </div>
    )
  }
}

export default MuralPage
