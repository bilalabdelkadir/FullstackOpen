const WeatherDisplay = ({ selectedWeather, country }) => {
  return (
    <div>
      <h2>Weather in {country}</h2>
      <br />

      <p>temprature {selectedWeather.temp} kelvin</p>
      <img
        src={
          selectedWeather.icon
            ? `https://openweathermap.org/img/wn/${selectedWeather.icon}.png`
            : null
        }
        className="icon"
      />
      <p>wind {selectedWeather.wind} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
