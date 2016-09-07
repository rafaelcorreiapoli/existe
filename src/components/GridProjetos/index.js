import React, { PropTypes } from 'react'
import ProjetoCard from '../ProjetoCard';
import { CSSGrid , makeResponsive } from 'react-stonecutter';

const Grid = makeResponsive(CSSGrid, { maxWidth: 1600 });

const GridProjetos = ({
  projetos = [],
}) => {
  console.log(projetos)
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
        projetos.map((projeto, i) => {
          return (
            <div style={{display: 'inline-flex', width: 300}} key={i}>
              <ProjetoCard {...projeto} />
            </div>
          )
        })
      }
    </Grid>
  )
}

export default GridProjetos
