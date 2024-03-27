import { useState } from "react";
import axios from 'axios';


function App() {

  const [data, setData] = useState({});
  const [town, setTown] = useState('');

  const KEY = '4c786317ff5e55c10b3247531d958779';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${KEY}`;


  const searchWeather = (event) => {
    if (event.key === 'Enter') {
      axios.get(URL).then((response)  => {
        setData(response.data)
      })
      // fetch(URL)
      //   .then((response) => response.json())
      //   .then((response) => {
      //     setData(response);
      //   });
      setTown('')
    }
  }

  return (
    <div className="App">
      <div className="inp-field">
        <input type="text"
          value={town}
          onChange={(event) => setTown(event.target.value)}
          placeholder='Enter location'
          onKeyDown={searchWeather}
        />
      </div>
      <div className="container">
        <div className="header">
          <div className="city">
            <p>{data.name}</p>
          </div>
        </div>
        <div className="temp">
          {data.main ? (
            <h1>
              {data.main.temp.toFixed()}
              °C
            </h1>
          ) : null}
        </div>
        <div className="desc">
          {data.weather ? (<p>{data.weather[0].main}</p>) : null}
        </div>
        {data.name !== undefined
          && (
          <div className="footer">
            <div className="feels">
              {data.main ? (
                <p className="bold">
                  {data.main.feels_like.toFixed()}
                  °C
                </p>) : null }
                <p>Відчувається</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">
                  {data.main.humidity}
                  %
                </p>) : null }
                <p>Вологість</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">
                  {`${data.wind.speed} `}
                  M/С
                </p>) : null }
                <p>Вітер</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
