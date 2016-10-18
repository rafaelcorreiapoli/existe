import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import {
  FILTRO_CATEGORIAS,
  FILTRO_SUBCATEGORIAS,
  FILTRO_TIMES,
  AREAS_E_FUNCOES,
} from '@resources/options'
import Checkbox from 'material-ui/Checkbox'
import FiltroInput, { CheckboxList } from '@components/FiltroInput'
import Divider from 'material-ui/Divider'
import RatingStars from '@components/RatingStars'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Busca } from '@resources/icons'
import { ACCENT } from '@resources/colors'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    //  justifyContent: 'center',
  },
  divider: {
    alignSelf: 'stretch',
  },
}

const styles2 = {
  areaTitle: {
    color: 'gray',
    marginRight: 20,
    textAlign: 'right',
  },
  funcao: {
    display: 'block',
  },
}

const styles3 = {
  number: {
    color: ACCENT,
  },
}

class RangePreco extends React.Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
  }

  render() {
    const {
      min,
      max,
    } = this.props

    if (min && max) {
      return (
        <div>
          de <span style={styles3.number}>R$ {min}</span>
          {' '}
          até <span style={styles3.number}>R$ {max}</span>
        </div>
      )
    }

    if (min && !max) {
      return (
        <div>
          a partir de <span style={styles3.number}>R$ {min}</span>
        </div>
      )
    }

    if (!min && max) {
      return (
        <div>
          até <span style={styles3.number}>R$ {max}</span>
        </div>
      )
    }

    return null
  }
}

class FiltroComunidade extends React.Component {
  static propTypes = {
    cidades: PropTypes.object,
    funcoes: PropTypes.object,
    tiposDeVideo: PropTypes.object,
    avaliacao: PropTypes.object,
    mediaPreco: PropTypes.number,
    mediaAvaliacoes: PropTypes.number,
    setFiltro: PropTypes.func,
    optionsCidades: PropTypes.array,
    cidadesExpanded: PropTypes.bool,
    funcoesExpanded: PropTypes.bool,
    tiposDeVideoExpanded: PropTypes.bool,
    mediaAvaliacoesExpanded: PropTypes.bool,
    mediaPrecoExpanded: PropTypes.bool,
    setExpanded: PropTypes.func,
  }
  static defaultProps = {
    optionsCidade: [],
  }

  render() {
    const {
      cidades,
      funcoes,
      tiposDeVideo,
      setFiltro,
      optionsCidades,
      mediaAvaliacoes,
      mediaPreco,
      cidadesExpanded,
      funcoesExpanded,
      tiposDeVideoExpanded,
      mediaAvaliacoesExpanded,
      mediaPrecoExpanded,
      setExpanded,
    } = this.props

    return (
      <div style={styles.container}>
        <FiltroInput
          label="Cidades"
          expanded={cidadesExpanded}
          onToggle={expanded => setExpanded('cidades', expanded)}
          component={
            <CheckboxList
              options={optionsCidades}
              values={cidades}
              handleCheck={(key, checked) => setFiltro('cidades', key, checked)}
            />
          }
        />
        <Divider style={styles.divider} />
        <FiltroInput
          label="Funções"
          expanded={funcoesExpanded}
          onToggle={expanded => setExpanded('funcoes', expanded)}
          component={
            <div>
              {
                AREAS_E_FUNCOES.map(area => (
                  <div key={area.value}>
                    <h4 style={styles2.areaTitle}>{area.label}</h4>
                    {
                      area.funcoes &&
                        <CheckboxList
                          options={area.funcoes}
                          handleCheck={(key, checked) => setFiltro('funcoes', key, checked)}
                          values={funcoes}
                        />
                    }

                  </div>
                ))
              }
            </div>
          }
        />
        <Divider style={styles.divider} />
        <FiltroInput
          label="Tipos de vídeo"
          expanded={tiposDeVideoExpanded}
          onToggle={expanded => setExpanded('tiposDeVideo', expanded)}
          component={
            <CheckboxList
              options={FILTRO_TIMES}
              values={tiposDeVideo}
              handleCheck={(key, checked) => setFiltro('tiposDeVideo', key, checked)}
            />
          }
        />
        <FiltroInput
          label="Media de Avaliações"
          onToggle={expanded => setExpanded('mediaAvaliacoes', expanded)}
          expanded={mediaAvaliacoesExpanded}
          component={
            <div>
              <RadioButtonGroup
                name="mediaAvaliacoes"
                valueSelected={mediaAvaliacoes}
                onChange={(e, value) => setFiltro('mediaAvaliacoes', value)}
              >
                <RadioButton
                  value={1}
                  label={<RatingStars rating={1} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={2}
                  label={<RatingStars rating={2} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={3}
                  label={<RatingStars rating={3} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={4}
                  label={<RatingStars rating={4} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={5}
                  label={<RatingStars rating={5} />}
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
            </div>
          }
        />
        <FiltroInput
          label="Média de preço"
          onToggle={expanded => setExpanded('mediaPreco', expanded)}
          expanded={mediaPrecoExpanded}
          component={
            <div>
              <RadioButtonGroup
                name="mediaPreco"
                valueSelected={mediaPreco}
                onChange={(e, value) => setFiltro('mediaPreco', value)}
              >
                <RadioButton
                  value={0}
                  label={<RangePreco min={0} max={500} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={1}
                  label={<RangePreco min={501} max={1000} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={2}
                  label={<RangePreco min={1001} max={5000} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={3}
                  label={<RangePreco min={5001} max={15000} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value={4}
                  label={<RangePreco min={15000} max={undefined} />}
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
            </div>
          }
        />
        <Divider style={styles.divider} />
      </div>
    )
  }
}


export default reduxForm({
  form: 'busca',
  destroyOnUnmount: false,
})(FiltroComunidade)
