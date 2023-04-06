import { useState } from "react";

const ShowSingleCountry = ({ country }) => {
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
    </div>
  );
};

const CountryList = ({ filteredData }) => {
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onShow = (country) => {
    if (selectedCountry) {
      setSelectedCountry(null);
      setShow(!show);
    } else {
      setSelectedCountry(country);
      setShow(!show);
    }
  };

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
          {filteredData.length === 1 ? (
            <ShowSingleCountry country={country} />
          ) : null}
        </div>
      ))}
      {selectedCountry && <ShowSingleCountry country={selectedCountry} />}
    </>
  );
};

export default CountryList;
