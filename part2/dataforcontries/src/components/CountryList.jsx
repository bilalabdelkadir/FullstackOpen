import { useState, useEffect } from "react";
import weather from "../services/weather";
import ShowSingleCountry from "./ShowSinbleCountry";

const CountryList = ({ filteredData }) => {
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState("");

  const onShow = (country) => {
    if (selectedCountry) {
      setSelectedCountry(null);
      setShow(!show);
    } else {
      setSelectedCountry(country);
      setShow(!show);

      weather.getWeather(country.latlng[0], country.latlng[1]).then((data) => {
        setSelectedWeather({
          temp: data.main.temp,
          wind: data.wind.speed,
          icon: data.weather[0].icon,
        });
        console.log(selectedWeather);
      });
    }
  };

  useEffect(() => {
    if (filteredData.length === 1) {
      setSelectedCountry(filteredData[0]);

      weather
        .getWeather(filteredData[0].latlng[0], filteredData[0].latlng[1])
        .then((data) => {
          setSelectedWeather({
            temp: data.main.temp,
            wind: data.wind.speed,
            icon: data.weather[0].icon,
          });
        });
    }
  }, [filteredData]);

  if (filteredData.length >= 10)
    return <p>too many matches, specify another filter</p>;
  return (
    <>
      {filteredData.map((country) => (
        <div key={country.name.common}>
          <h2>
            {country.name.common}{" "}
            {filteredData.length > 1 ? (
              <button onClick={() => onShow(country)}>show</button>
            ) : null}
          </h2>
        </div>
      ))}
      {(selectedCountry || filteredData.length === 1) && (
        <ShowSingleCountry
          selectedWeather={selectedWeather}
          country={
            filteredData.length === 1 ? filteredData[0] : selectedCountry
          }
        />
      )}
    </>
  );
};

export default CountryList;
