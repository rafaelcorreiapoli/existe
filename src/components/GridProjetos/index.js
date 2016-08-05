import React, { PropTypes } from 'react'
import ProjetoCard from '../ProjetoCard';
import { CSSGrid , makeResponsive } from 'react-stonecutter';

const Grid = makeResponsive(CSSGrid, { maxWidth: 1920 });

const GridProjetos = ({
  projetos
}) => {
  return (
    <Grid
      style={{margin: 'auto'}}
      component="div"
      columnWidth={300}
      gutterWidth={20}
      gutterHeight={30}
      itemHeight={325}
      duration={200}
      easing="ease-out"
    >
      {
        projetos.entrySeq().map(([key, projeto]) => (
          <div style={{display: 'inline-flex', width: 300}} key={key}>
            <ProjetoCard
              {...projeto.toObject()}
              />
          </div>
        ))
      }
    </Grid>
  )
}

export default GridProjetos
