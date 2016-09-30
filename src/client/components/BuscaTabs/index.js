import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { ACCENT } from '@resources/colors'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const styles = {
  tabs: {
    width: '100%',
  },
}
const TabLabel = ({
  label,
  number,
}) => (
  <div>
    {label}
    <span style={{ color: ACCENT }}> ({number})</span>
  </div>
)
TabLabel.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number,
}

class BuscaTabs extends React.Component {
  static propTypes = {
    videosCount: PropTypes.number,
    comunidadeCount: PropTypes.number,
    projetosCount: PropTypes.number,
    onChange: PropTypes.func,
    entidade: PropTypes.string,
  }

  render() {
    const {
      videosCount,
      comunidadeCount,
      projetosCount,
      onChange,
      entidade,
    } = this.props

    return (
      <Tabs value={entidade} style={styles.tabs}>
        <Tab
          value="videos"
          label={<TabLabel label="VÍDEO" number={videosCount} />}
          onActive={() => onChange('videos')}
        />
        <Tab
          value="comunidade"
          label={<TabLabel label="COMUNIDADE" number={comunidadeCount} />}
          onActive={() => onChange('comunidade')}
        />
        <Tab
          value="projetos"
          label={<TabLabel label="PROJETOS" number={projetosCount} />}
          onActive={() => onChange('projetos')}
        />
      </Tabs>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     videosCount: 2,
//     comunidadeCount: 1,
//     projetosCount: 3,
//   }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//   onActive(tab) {
//     const value = tab.props.value
//     dispatch(push(`/busca/${value}`))
//   },
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps)(BuscaTabs);

export default BuscaTabs
