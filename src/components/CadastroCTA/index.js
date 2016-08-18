import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
}
const CadastroCTA = ({
  onClick
}) => {
  return (
    <div style={styles.container}>
      <h3>Ainda não é membro?</h3>
      <RaisedButton
        style={{width: 300, marginBottom: 10}}
        onClick={() => onClick()}
        label="CADASTRE-SE AGORA"
        primary={true} />
    </div>
  )
}

export default CadastroCTA
