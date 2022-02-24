import { useWeather } from '../../context/WeatherContext';
import getDate from '../Date/getDate';
import './Table.css'

function Table() {
  const { daysData } = useWeather();
  return (
    <>
      
      <br />
      {/* <label>{JSON.stringify(daysData)}</label> */}
      <table className='blueTable'>
        <tbody>
          {daysData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{getDate(item.dt)}</td>
                <td>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt=''
                  ></img>
                </td>
                <td>{item.weather[0].description.toUpperCase()}</td>
                <td>Sıcaklık: {item.temp.day}</td>
                <td>Hissedilen sıcaklık: {item.feels_like.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
    </>
  );
}

export default Table;
