import axios from 'axios';

const API_KEY = '&appid=8265565043966fbc9fb30f37e68f1479';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?mode=json' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
	const URL = ROOT_URL + '&q=' + city + ',it';
	const request = axios.get(URL);

	console.log('Term: ', city);
	console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}