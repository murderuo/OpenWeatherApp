import Main from './components/Main';
import LocationProvider from './context/LocationContext';
import WeatherProvider from './context/WeatherContext';

function App() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>This is Weather App</div>
      <hr />
      <LocationProvider>
        <WeatherProvider>
          <Main />
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
