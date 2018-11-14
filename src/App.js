import React, { Component } from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";
const API_KEYS = "4844304fe2f5e4e608e39b2491dc2c63";
//const URL = "https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22"
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
      http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEYS}&units=metric
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
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
        />
        <Error error={this.state.error} />
      </div>
    );
  }
}

export default App;
