import React, { PropTypes } from 'react'
import FileDropzone from '@components/FileDropzone'
import AutoUpload from '@components/AutoUpload'

class FileUpload extends React.Component {
  static propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
  }
  render() {
    console.log(this.props)

    const {
      input,
      label,
    } = this.props

    return (
      <div>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <span>{label}</span>
        </div>
        {
          !input.value &&
            <FileDropzone
              onDrop={(files) => {
                input.onChange({
                  preview: files[0].preview,
                  status: 5,
                  progress: 0,
                  file: files[0],
                })
              }}
              multiple={false}
            />
        }
        {
          input.value &&
            <AutoUpload
              input={input}
              onRemove={() => input.onChange(null)}
            />
        }
      </div>

    )
  }
}

export default FileUpload;
