import axios from "axios";
// const api_key = process.env.REACT_APP_API_KEY;

const weatherUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${`8ebe773d4672e6565e7fa3efd741208d`}`;

const getWeather = (lat, lon) => {
  let url = weatherUrl(lat, lon);
  return axios.get(url).then((res) => res.data);
};

export default {
  getWeather,
};
