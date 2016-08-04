import React from 'react';
import ReactDOM from 'react-dom';
const DropdownComposer = ComposedComponent => class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.windowClick = this.windowClick.bind(this);
  }


  windowClick(e) {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
        this.handleToggle(false);
    }
  }

  componentDidMount () {
    window.addEventListener('mousedown', this.windowClick , false);
  }

  componentWillUnmount () {
    window.removeEventListener('mousedown', this.windowClick);
  }

  getOption(value) {
    const { options } = this.props;
    return options.find(option => {
      return option.value === value
    }) || {};
  }

  handleToggle(open) {
    this.setState({
      open
    })
  }
  handleItemClick(value) {
    const { onClick } = this.props
    console.log(value);
    onClick(value);
    this.handleToggle(false);
  }

  render() {
    return <ComposedComponent
      selectedOption={this.getOption(this.props.value)}
      handleToggle={this.handleToggle}
      open={this.state.open}
      handleItemClick={this.handleItemClick}
      {...this.props}

      />
  }
}

export default DropdownComposer;
