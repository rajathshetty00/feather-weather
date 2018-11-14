import React, { Component } from "react";
class Error extends Component {
  state = {};
  render() {
    var error = null;
    if (this.props.error) {
      error = (
        <div>
          <p />
          {this.props.error}
        </div>
      );
    }

    return error;
  }
}

export default Error;
