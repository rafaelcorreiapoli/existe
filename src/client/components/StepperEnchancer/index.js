import React from 'react'
export default (ComposedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        finished: false,
        stepIndex: 0,
      };
    }
    handleNext = () => {
      const {stepIndex} = this.state;
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      });
    };
    handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({
          stepIndex: stepIndex - 1
        });
      }
    };

    render() {
      return <ComposedComponent
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
        stepIndex={this.state.stepIndex}
        finished={this.state.finished}
        {...this.props}
      />
    }
  }
}
