import React from 'react';
import PropTypes from 'prop-types'

class CountDown extends React.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      count: props.startCount
    }
  }
  componentDidMount() {
    this.intervalHandler = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({ count: newCount })
      } else {
        window.clearInterval(this.intervalHandler)
      }
    }, 1000);
  }
  componentWillUnmount() {
    if (this.intervalHandler) {
      window.clearInterval(this.intervalHandler);
    }
  }
  render() {
    return this.props.children(this.state.count)
  }
}

CountDown.propTypes = {
  children: PropTypes.func.isRequired,
  startCount: PropTypes.number.isRequired
}

export default CountDown;