
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;
		console.log('City: ', name);

		return (
			<tr key={Date.now()}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange" units="K" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
			</tr>
		);
	}

	logProps(){
		console.log('Props: ', this.props);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
				<tr>
					<th>Città</th>
					<th>Temperatura (K)</th>
					<th>Pressione (hPa)</th>
					<th>Umidità (%)</th>
				</tr>
				</thead>
				<tbody>
				{this.logProps()}
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);