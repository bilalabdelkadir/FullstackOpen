import WeatherDisplay from "./WeatherDisplay";

const ShowSingleCountry = ({ country, selectedWeather }) => {
  return (
    <div>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>

      <h2>Languages:</h2>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`${country.name} flag`} />
      {selectedWeather && (
        <WeatherDisplay
          country={country.name.common}
          selectedWeather={selectedWeather}
        />
      )}
    </div>
  );
};

export default ShowSingleCountry;
