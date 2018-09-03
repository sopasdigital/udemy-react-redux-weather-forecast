import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparklinesChart from '../../Components/SparklineChart';
import GoogleMap from '../../Components/GoogleMap';


class WeatherList extends Component {
  renderWeather(cityData) {
    //  Renders a single entry

    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(lon, lat);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><SparklinesChart data={temps} color="orange" units="C"/></td>
        <td><SparklinesChart data={pressures} color="blue" units="hPa"/></td>
        <td><SparklinesChart data={humidities} color="purple" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
