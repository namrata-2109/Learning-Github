import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./App.css";
import Box from './Box';
import Map from "./Map";
import Table from './Table';
import {sortData} from './util';
import Graph from './Graph';

const App = () => {

  //disease.sh

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then(data => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              code: country.countryInfo.iso3
            }));
        const sortedData = sortData(data);
          setTableContent(sortedData);  //taking (data) before sorting          setCountries(countries);
       setCountries(countries);
        });
    };
    getCData();
  }, []);

  const getCountryName = async (event) => {
    const countryCode = event.target.value;
  
    const url = countryCode === "Worldwide" ? "https://disease.sh/v3/covid-19/all " : ` https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      })
  };
//console.log("helloooo", countryInfo);

  return (
    <div className='app'>
      <div className="app-left">
        <div className='app-head'>
          <h1>COVID CASES</h1>
          <FormControl className="app-dropdown">
            <Select variant='outlined' onChange={getCountryName} value={country}>
              <MenuItem value="Worldwide">Worldwide</MenuItem>
              {countries.map(country => (
                <MenuItem value={country.code}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='app-box'>
          <Box
            title="Total Corona Cases"
            total={countryInfo.todayCases}
            cases={countryInfo.cases} />
          <Box
            title="Deaths"
            total={countryInfo.todayDeaths}
            cases={countryInfo.deaths} />
          <Box
            title="Recovered"
            total={countryInfo.todayRecovered}
            cases={countryInfo.recovered} />
        </div>




        <Map />
      </div>
      <div>
        <Card className='app-right'>
          <CardContent>
          <h2 className='table-head'>Cases by Country</h2>
          <Table className="table" countryList={ tableContent}/>
                <h2>Worldwide Cases</h2>
                {/* <Graph/> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App