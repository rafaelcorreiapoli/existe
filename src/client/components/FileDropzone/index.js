import React, { PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import { Upload as UploadIcon } from '@resources/icons'
import { ACCENT } from '@resources/colors'

class FileDropzone extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  }
  render() {
    const {
      style,
      ...props,
    } = this.props

    return (
      <Dropzone
        style={{
          width: 200,
          height: 200,
          borderWidth: 2,
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderStyle: 'dashed',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          ...style,
        }}
        {...props}
      >
        <UploadIcon
          color={ACCENT}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </Dropzone>
    )
  }
}

export default FileDropzone;
