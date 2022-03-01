import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('istanbul');
  const [locationVal, setLocationVal] = useState({
    name: 'Istanbul',
    lat: '41.0096334',
    lon: '28.9651646',
    country: 'TR',
  });
  //   const values={}
  useEffect( () => {
     axios(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=ec7d1c0e712571e97e77329fca7e15f3`,
    ).then(response => {
      if (
        response.data.length > 0 &&
        response.data[0].name.toLowerCase() === location.toLowerCase()
      ) {
        setLocationVal({
          ...locationVal,
          name: response.data[0].name,
          lat: response.data[0].lat,
          lon: response.data[0].lon,
          country: response.data[0].country,
        });
      }
    });
  }, [location,locationVal]);

  const values = { location, setLocation, locationVal, setLocationVal };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);

export default LocationProvider;
