import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Adicionar, Deletar } from '../../resources/icons';
import styles from './styles';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';


const TextFieldArray = ({
  value = [],
  error,
  onChange
}) => {
  if (!Array.isArray(value)) value = [];
  return (
    <div style={styles.container}>
      {
        value.map((val, i) => (
          <div key={i} style={styles.valueRow}>
            <TextField
              name={`textfield_${i}`}
              errorText={Array.isArray(error) && error[i]}
              onChange={(e, val) => {
                const newVal = [
                  ...value.slice(0, i),
                  val,
                  ...value.slice(i + 1)
                ]
                console.log(newVal)
                onChange(newVal);
              }}
              value={val}
              hintText=""
              style={styles.textField} />
            <IconButton
              onClick={() => {
                const newVal = value.slice();
                newVal.splice(i, 1)
                onChange(newVal);
              }}
              tooltip="Remover"
              style={styles.deleteButton}
              iconStyle={styles.deleteIcon}>
              <Deletar style={styles.deleteIcon} />
            </IconButton>

          </div>
        ))
      }
      <FlatButton
        onClick={() => {
          const newVal = value.concat('');
          console.log(newVal);
          onChange(newVal);
        }}
        label="Adicionar"
        labelPosition="before"
        primary={true}
        style={styles.addButton}
        icon={<Adicionar />}
      />

    {error && !Array.isArray(error) && <span>{error}</span>}
    </div>

  )
}

export default TextFieldArray
