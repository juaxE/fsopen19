import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [searchString, setSearchString] = useState('')
  const [countries, setCountries] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data.filter(filterCountries))
      })

  })


  const filterCountries = (country) => {

    if (country.name.toLowerCase().includes(searchString.toLowerCase())) {
      return country
    }
  }

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
  }

  const flagStyle = {
    height:'20%',
    width:'20%'
  }

  return (
    <div>find countries <input value={searchString}
      onChange={handleSearchChange}></input>
      {countries.length > 10 ? <p>Too many matches, specify another filter</p> :
        countries.length === 1 ?
          <div><h1>{countries[0].name}</h1>
            <p>Capital: {countries[0].capital}</p>
            <p>Population: {countries[0].population}</p>

            <h2>Languages</h2>
            {Object.values(countries[0].languages).map((language, i) => <li key={i}>{language.name}</li>)}

            <img src={countries[0].flag} style={flagStyle}></img>
          </div>

          : Object.values(countries).map((country, i) =><div> <li key={i}>{country.name}</li> <button onClick={handleSearchChange} value={country.name}>show</button></div>)
      }
    </div>

  );
}

export default App;
