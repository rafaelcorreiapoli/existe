import React, { PropTypes } from 'react'
import { Texto } from '@resources/icons'
import SalvosItem from '@components/SalvosItem'
import { composeWithTracker } from 'react-komposer'

class Videos extends React.Component {
  static propTypes = {
    videos: PropTypes.array,
  }

  render() {
    const {
      videos,
    } = this.props
    return (
      <div>
        {videos.map((video, i) => (
          <SalvosItem
            key={i}
            {...video}
          />
        ))}
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    videos: [{
      titulo: 'VIDEO 01',
      subtitulo: 'rafaelribeirocorreia',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
    }],
  })
}
export default composeWithTracker(composer)(Videos);
