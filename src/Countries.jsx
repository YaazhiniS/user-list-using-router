import  { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleButtonClick = (population) => {
    alert(`Population: ${population}`);
  };

  return (
    <div id="countryContainer" className="container">
      <div className="row">
        {countries.map((country) => (
          <div key={country.catch} className="col-md-4 mb-4">
            <div className="card">
              <img src={country.flags.svg} alt={country.name.common} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-header">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleButtonClick(country.population)}
                >
                  Show Population
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
