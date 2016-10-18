import React, {
  Component,
  PropTypes,
} from 'react';

const styles = {
  titleContainer: {
    textAlign: 'center',
    marginBottom: 0,
  },
  title: {
    marginBottom: 0,
  },
}

export default class PageTitle extends Component {

  static defaultProps = {}

  static propTypes = {
    title: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
    } = this.props

    return (
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>{title}</h1>
      </div>
    );
  }

}
