import React, { PropTypes } from 'react'
import { SetaDireita } from '@resources/icons'
import IconButton from 'material-ui/IconButton'
import { getColorForArea } from '@utils/get_color'
import CollapseToggle from '@components/CollapseToggle'

const styles = {
  container: {
    padding: 10,
  },
  area: {
    fontSize: 20,
  },
  areaContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
}

class AreaTitle extends React.Component {
  static propTypes = {
    area: PropTypes.string,
    onClickTitle: PropTypes.func,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func,
  }
  render() {
    const {
      area,
      onClickTitle,
      expanded,
      onToggle,
    } = this.props

    const labels = {
      texto: 'Texto',
      imagem: 'Imagem',
      audio: 'Áudio',
      cena: 'Cena',
      producao: 'Produção',
    }

    const areaColor = getColorForArea(area)
    return (
      <div style={styles.areaContainer}>
        <span style={Object.assign({}, styles.area, { color: areaColor })}>
          {labels[area]}
        </span>
        {/* <IconButton
          tooltip="Ver mais"
          onTouchTap={onClickTitle}
        > */}
          <CollapseToggle
            expanded={expanded}
            onToggle={onToggle}
            iconColor={areaColor}
          />
          {/* <SetaDireita color={areaColor} />
        </IconButton> */}
      </div>
    )
  }
}

export default AreaTitle;
