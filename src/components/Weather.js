import React from "react";
const Weather = props => {
  var person = null;

  if (props.weatherData.city && props.weatherData.country) {
    person = (
      <div className="weather__info">
        <p className="weather__key">
          <span className="weather__value">Location:</span>
          {props.weatherData.city},{props.weatherData.country}.
        </p>
        <p className="weather__key">
          <span className="weather__value">Temperature:</span>
          {props.weatherData.temperature}℃
        </p>
        <p className="weather__key">
          <span className="weather__value">Humidity:</span>
          {props.weatherData.humidity}%
        </p>
        <p className="weather__key">
          <span className="weather__value">Conditions:</span>
          {props.weatherData.description}
        </p>
      </div>
    );
  }
  return person;
};

export default Weather;
