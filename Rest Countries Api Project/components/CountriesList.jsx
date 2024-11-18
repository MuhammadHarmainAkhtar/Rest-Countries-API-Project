import React, { useEffect, useState } from "react";
// import CountriesData from "../CountriesData";// if uncomment then comment the useEffect(0 portion).
import CountryCard from "./CountriesCard";
import CountriesListShimmer from "./CountriesListShimmer";
export default function CountriesList({ query, option }) {
  const [CountriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    //BASICALLY useEffect IS USED TO MONITOR THE STATE.
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setFilteredCountries(data);
      });
  }, []);
  useEffect(() => {
    if (option) {
      const filterCountry = CountriesData.filter(
        (country) => country.region === option
      );
      setFilteredCountries(filterCountry);
    } else {
      setFilteredCountries(CountriesData);
    }
  }, [option, CountriesData]);

  return (
    <>
      {/* <input onChange={(e) => setQuery(e.target.value.toLowerCase())} /> */}
      {!CountriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {filteredCountries
            .filter((country) =>
              country.name.common.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
