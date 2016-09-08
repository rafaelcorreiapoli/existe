import React, { PropTypes } from 'react'
import UsuarioMenu from '../UsuarioMenu'
export Avaliacoes from './Avaliacoes'
export Experiencia from './Experiencia'
export Funcoes from './Funcoes'
export Historico from './Historico'
export Info from './Info'
export Portfolio from './Portfolio'
export Seguidores from './Seguidores'
import UsuarioCard from '../UsuarioCard'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import RaisedButton from 'material-ui/RaisedButton'
import { Adicionar } from '@resources/icons'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContainer: {
    borderRightWidth: 2,
    borderRightStyle: 'solid',
    borderRightColor: '#eee',
    paddingRight: 0,
  },
  mainContainer: {
    padding: 50,
  },
}
const UsuarioPage = ({
  routes,
  params,
  children,
}) => {
  return (
    <Grid>
      <Row>
        <Col xs={3} style={styles.leftContainer}>
          <UsuarioCard
            foto={'http://placehold.it/300x300'}
            nome={'Rafael Ribeiro Correia'}
            area={'imagem'}
            projetosFeitos={12}
            cidade={'São Paulo'}
            estado={'SP'}
            seguindo={12}
            mediaAvaliacao={3}
            numeroProjetos={2}
            numeroAvaliacoes={5}
            numeroSeguidores={3}
            mostrarAvaliacoes
            mostrarSeguidores
            cargo={'cargo'}
            style={{ paddingRight: 40 }}
          />
          <UsuarioMenu
            userId={params.userId}
            active={routes[3].path}
          />
          <RaisedButton
            label="SEGUIR"
            icon={<Adicionar />}
            primary
            style={{ float: 'right' }}
          />
        </Col>
        <Col xs={9} style={{ paddingLeft: 40 }}>
          {children}
        </Col>
      </Row>
    </Grid>
  )
}

export default UsuarioPage
