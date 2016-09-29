import React from 'react'

export default ComposedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.toggleCollapse = this.toggleCollapse.bind(this)
      this.state = {
        collapse: false,
      }
    }

    toggleCollapse() {
      this.setState({
        collapse: !this.state.collapse,
      })
    }
    render() {
      return (
        <ComposedComponent
          {...this.state}
          {...this.props}
          toggleCollapse={this.toggleCollapse}
        />
      )
    }
  }
