import { useLocation } from '../../context/LocationContext';
import { useWeather } from '../../context/WeatherContext';
import './Input.css';

function Input() {
  const { setLocation } = useLocation();
  const { locationVal } = useWeather();
  return (
    <>
      <table className="blueTable_center">
        <tbody>
          <tr>
            <td>
              <input
                onChange={e => {
                  if (e.target.value.length >= 4) {
                    // console.log(e.target.value);
                    setLocation(e.target.value);
                  }
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>{`${locationVal.name} , ${locationVal.country}`}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Input;
