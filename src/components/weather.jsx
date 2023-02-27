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
    <div className="container" style={{textAlign:"center"}}>
      <h1>Weather App</h1>
      <div style={{margin:"50px auto 0"}}>
        <input
          type="text"
          placeholder="search for city..."
          onChange={(e) => {setCity(e.target.value)}}
        />
      </div>
      <div style={{height:"300px",width:"300px",border:"2px solid red",margin:"20px auto 0"}}>
        {
            !city? <div><p>please enter valid city</p></div>: weather.map((item, i) => {
                return (
                  <div key={i}>
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
