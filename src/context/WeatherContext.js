import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from './LocationContext';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const part = 'current,minutely,hourly,alerts';

  const { locationVal } = useLocation();
  const [daysData, setDaysData] = useState([]);

  useEffect( () => {
     axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${locationVal.lat}&lon=${locationVal.lon}&exclude=${part}&appid=ec7d1c0e712571e97e77329fca7e15f3&units=metric&lang=tr`,
    ).then(response => setDaysData(response.data.daily));
  }, [locationVal]);

  const values = { daysData, locationVal };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);

export default WeatherProvider;
