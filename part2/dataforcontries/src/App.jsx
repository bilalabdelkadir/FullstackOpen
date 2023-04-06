import countries from "./services/countries";
import { useState, useEffect } from "react";
import CountryList from "./components/CountryList";

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
