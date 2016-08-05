import React, { PropTypes } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import OrdenarProjetos from '../OrdenarProjetos'
import FiltroArea from '../FiltroArea'
import FiltroStatusProjeto from '../FiltroStatusProjeto'
import Paper from 'material-ui/Paper'



const FiltrosMural = ({
  area,
  ordem,
  status,
  categoria,
  handleChangeArea,
  handleChangeOrdem,
  handleChangeStatus,
  handleChangeCategoria
}) => {
  return (
    <div>
      <div style={{display: 'flex'}}>
        <FiltroAreaHint />
        <FiltroArea
          value={area}
          onChange={handleChangeArea}
          />
        <FiltroStatusProjeto
          style={{width: '100%'}}
          value={status}
          onChange={handleChangeStatus}
          />
      </div>

      <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: 30, paddingBottom: 30}}>
        {/*<FlatButton
          style={{marginRight: 40}}
          label="CRIAR NOVO PROJETO"
          secondary={true}
          icon={<AddCircleOutline />}
          />*/}
        <FiltroCategoria
          style={{marginRight: 40}}
          value={categoria}
          onChange={handleChangeCategoria}
          />
        <OrdenarProjetos
          style={{marginRight: 40}}
          value={ordem}
          onChange={handleChangeOrdem}
          />
      </div>
    </div>
  )
}

export default FiltrosMural
