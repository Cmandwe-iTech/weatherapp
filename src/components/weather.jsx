import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setweather] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bc904f99bdc19d6811d3f46e5850904`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setweather([data])
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);
  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="search for city..."
          onChange={(e) => {setCity(e.target.value)}}
        />
      </div>
      <div>
        {
            !city? <div><p>please enter valid city</p></div>: weather.map((item, i) => {
                return (
                  <div>
                    <p>Weather Details of City: {item.name}</p>
                    <p>Current Temperature: {item.cod - 170} &#8451;</p>
                    <p>Temperature Range: {item.cod - 180} &#8451; to {item.cod - 170} &#8451;</p>
                    <p>Humidity: {item.cod - 164}</p>
                    <p>Sea level: {item.timezone}</p>
                    <p>Ground level: {item.visibility}</p>
                  </div>
                );
              })  
        }
      </div>
    </div>
  );
};
export default Weather;
