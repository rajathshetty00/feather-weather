import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";
const API_KEYS = "4844304fe2f5e4e608e39b2491dc2c63";
class App extends Component {
  state = {
    city: null,
    country: null,
    temperature: null,
    humidity: null,
    description: null,
    error: ""
  };

  getWeather = async event => {
    event.preventDefault();
    var city = event.target.elements.city.value;
    var country = event.target.elements.country.value;
    const api_call = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEYS}&units=metric
    `);
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: null
      });
    } else {
      this.setState({
        error: "Sorry, I can't find without city and country names "
      });
    }
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather weatherData={this.state} />
                  <Error error={this.state.error} /> */
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
