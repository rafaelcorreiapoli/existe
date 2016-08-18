import React, { PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { getColorForArea } from '../../utils/get_color'
import {
  Checkbox,
  IconButton
} from 'material-ui'
import { Adicionar, Deletar } from '../../resources/icons';
import GetIcon from '../GetIcon'
const FuncoesCheckTable = ({
  options,
  onChangeToparia,
  onChangeExerce,
  input: {
    value: {
      exerce = [],
      toparia = [],
    },
    onChange
  }
}) => {
  return (
    <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false} selectable={false}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center'}}>Exerce</TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center'}}>Toparia Exercer</TableHeaderColumn>

          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
            options.map((area, i) => {
              const headerRow =
              <TableRow key={area.value} selectable={false} displayBorder={false}>
                <TableRowColumn colSpan={3} style={{display: 'flex', alignItems: 'center'}}>
                  {/*<GetIcon area={area.nome.toLowerCase()} style={{marginRight: 10, width: 50, height: 50}}/>*/}
                  <h2 style={{color: getColorForArea(area.value), margin: 0}}>
                  {area.label}
                  </h2>
                </TableRowColumn>
              </TableRow>
              const funcoesRow = area.funcoes.map(funcao => (
                <TableRow key={funcao.value} selectable={false} hoverable={true}>
                  <TableRowColumn>
                    <span style={{marginLeft: 20}}>
                      {funcao.label}
                    </span>
                  </TableRowColumn>
                  <TableRowColumn style={{alignItems: 'center'}}>
                    <Checkbox
                      iconStyle={{
                        fill: getColorForArea(area.value)
                      }}
                      onCheck={(e, checked) => {
                        let newValue
                        if (checked) {
                          //newValue = exerce.concat(funcao.value)
                          newValue = {
                            exerce: exerce.concat(funcao.value),
                            toparia // : toparia.indexOf(funcao.value) === -1 ? toparia.concat(funcao.value) : toparia
                          }
                        } else {
                          newValue = {
                            exerce: exerce.filter(f => f !== funcao.value),
                            toparia
                          }
                        }

                        onChange(newValue)
                      }}
                      checked={exerce.indexOf(funcao.value) !== -1}
                      style={{width: 'initial', margin: 'auto'}}
                    />
                  </TableRowColumn>
                  <TableRowColumn>
                    <Checkbox
                      iconStyle={{
                        fill: getColorForArea(area.value)
                      }}
                      onCheck={(e, checked) => {
                        let newValue
                        if (checked) {
                          //newValue = exerce.concat(funcao.value)
                          newValue = {
                            toparia: toparia.concat(funcao.value),
                            exerce
                          }
                        } else {
                          newValue = {
                            toparia: toparia.filter(f => f !== funcao.value),
                            exerce
                          }
                        }

                        onChange(newValue)
                      }}
                      disabled={exerce.indexOf(funcao.value) !== -1}
                      checked={toparia.indexOf(funcao.value) !== -1 || exerce.indexOf(funcao.value) !== -1}
                      style={{width: 'initial', margin: 'auto'}}/>
                  </TableRowColumn>
                </TableRow>
              ))

              return [headerRow, funcoesRow]
            })

          }
        </TableBody>
      </Table>
  )
}

export default FuncoesCheckTable
