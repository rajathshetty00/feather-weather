import React, { Component } from "react";
class Weather extends Component {
  state = {};
  render() {
    var person = null;

    if (this.props.city && this.props.country) {
      person = (
        <div>
          <p>
            Location: {this.props.city},{this.props.country}.
          </p>
          <p>Temperature: {this.props.temperature}</p>
          <p>Humidity: {this.props.humidity}</p>
          <p> Conditions: {this.props.description}</p>
          <p>{this.props.error}</p>
        </div>
      );
    }
    return person;
  }
}

export default Weather;
