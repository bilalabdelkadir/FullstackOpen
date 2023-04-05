import countries from "./services/countries";
import { useState, useEffect } from "react";

const CountryList = ({ filteredData }) => {
  if (filteredData.length >= 10)
    return <p>too many matches, specify another filter</p>;
  return (
    <>
      {filteredData.map((country) => (
        <div key={country.name.common}>
          <p>{country.name.common}</p>
          {filteredData.length === 1 ? (
            <div>
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
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
};

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log("effect");
    countries
      .getAll()
      .then((returnedValue) => {
        setAllCountries(returnedValue);
      })
      .catch((error) => console.error(error));
  }, []);

  // input change handler
  const inputChange = (e) => {
    setValue(e.target.value);

    if (allCountries.length > 0) {
      setFilteredData(
        allCountries.filter((country) =>
          country.altSpellings.some((spelling) =>
            spelling.toLowerCase().includes(e.target.value.toLowerCase())
          )
        )
      );
    }
  };

  return (
    <div>
      <h1>Countries : {value}</h1>
      <div>
        find Contries <input onChange={(e) => inputChange(e)} value={value} />
      </div>
      <CountryList filteredData={filteredData} />
    </div>
  );
}

export default App;
