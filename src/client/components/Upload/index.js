import React, { PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import UploadImageProgress from '@components/UploadImageProgress'
import Files, { FileDDP } from '/client/files'

export const STATUS_SUCCESS = 0
export const STATUS_ERROR = 1
export const STATUS_PAUSED = 2
export const STATUS_UPLOADING = 3
export const STATUS_ABORTED = 4
export const STATUS_IDLE = 5;

const styles = {
  image: {
    display: 'block',
    width: 100,
    height: 100,
  },
}
class Upload extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.shape({
        preview: PropTypes.string,
        progress: PropTypes.number,
        status: PropTypes.number,
        fileId: PropTypes.string,
      }),
    }),
  }

  constructor(props) {
    super(props)
    this.handleDrop = this.handleDrop.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }


  startUpload(file) {
    const {
      input: {
        onChange,
        value,
      },
    } = this.props


    //  console.log('starting upload...')

    this.upload = Files.insert({
      file,
      streams: 'dynamic',
      chunkSize: 'dynamic',
    }, false);

    this.upload.on('start', (error) => {
      //  console.log('start!')
      //  console.log(this.props)
      onChange({
        ...this.props.input.value,
        status: STATUS_UPLOADING,
      })
    });

    this.upload.on('end', (error, fileObj) => {
      //  console.log('end!')
      //  console.log(this.props)
      if (error) {
        onChange({
          ...this.props.input.value,
          status: STATUS_ERROR,
        })
      } else {
        onChange({
          ...this.props.input.value,
          status: STATUS_SUCCESS,
          fileId: fileObj._id,
        })
      }
    });

    this.upload.on('progress', (progress) => {
      //  console.log('progress!')
      onChange({
        ...this.props.input.value,
        progress,
      })
    })

    this.upload.on('pause', () => {
      //  console.log('pause!')
      onChange({
        ...this.props.input.value,
        status: STATUS_PAUSED,
      })
    })

    this.upload.on('abort', () => {
      //  console.log('abort!')
      onChange({
        ...this.props.input.value,
        status: STATUS_ABORTED,
      })
    })

    this.upload.on('continue', () => {
      //  console.log('continue!')
      onChange({
        ...this.props.input.value,
        status: STATUS_UPLOADING,
      })
    })

    this.upload.start()
  }


  handleDrop(files) {
    const {
      input: {
        onChange,
      },
    } = this.props

    onChange({
      preview: files[0].preview,
      status: STATUS_UPLOADING,
      progress: 0,
    })

    // setTimeout(() => onChange({
    //   ...this.props.input.value,
    //   progress: 50,
    // }), 500)
    //  setTimeout(() => this.startUpload(files[0]), 2000)
    //  setTimeout(() => this.startUpload(files[0]), 500)

    setTimeout(() => this.startUpload(files[0]), 500)
  }

  renderWaiting() {
    return (
      <div>
        <Dropzone
          onDrop={this.handleDrop}
          multiple={false}
          style={{
            width: 100,
            height: 100,
            borderWidth: 2,
            borderColor: 'rgb(102, 102, 102)',
            borderStyle: 'dashed',
            borderRadius: 5,
          }}
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }

  handleRemove() {
    const {
      input: {
        value: {
          fileId,
        },
      },
      onRemove,
    } = this.props

    FileDDP.call('removeFile', fileId, (err) => {
      if (!err) {
        onRemove()
      }
    })
  }


  renderUpload() {
    const {
      input: {
        value: {
          progress,
          preview,
          status,
        },
      },
    } = this.props

    //  console.log(progress, preview, status )
    return (
      <UploadImageProgress
        preview={preview}
        progress={progress}
        height={100}
        width={100}
        style={{ width: 100, height: 100 }}
        uploading={status === STATUS_UPLOADING}
        success={status === STATUS_SUCCESS}
        error={status === STATUS_ERROR}
        onRemove={this.handleRemove}
      />
    )
  }

  render() {
    const {
      input: {
        value: {
          status = STATUS_IDLE,
        },
      },
    } = this.props

    //  console.log(status)
    return (
      <div>
        {status === STATUS_IDLE
          ? this.renderWaiting()
          : this.renderUpload()
        }
      </div>
    )
  }
}

export default Upload;
