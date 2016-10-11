import React, { PropTypes } from 'react'
import FileDropzone from '@components/FileDropzone'
import { Field } from 'redux-form'
import AutoUpload from '@components/AutoUpload'

class FileUploadArray extends React.Component {
  static propTypes = {
    fields: PropTypes.object,
    label: PropTypes.string,
  }

  render() {
    const {
      fields,
      label,
    } = this.props

    return (
      <div>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <span>{label}</span>
        </div>
        {
          <FileDropzone
            onDrop={(files) => {
              files.forEach(file => fields.push({
                preview: file.preview,
                status: 5,
                progress: 0,
                file,
              }))
            }}
          />
        }
        <div
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {
            fields.map((ark, i) => (
              <Field
                key={i}
                name={`${ark}`}
                component={AutoUpload}
                onRemove={() => fields.remove(i)}
                style={{ display: 'inline-flex' }}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default FileUploadArray;
