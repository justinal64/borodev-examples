import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  state = {
    counter: 0
  };

  ReturnsTrue() {
    return true;
  }

  UpdateCounter(val) {
    this.setState({ counter: val || 0 });
  }

  render() {
    const { label } = this.props;
    const { counter } = this.state;

    return (
      <button
        onClick={() => {
          this.setState({ counter: counter + 1 });
        }}
      >
        {label} {counter}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
