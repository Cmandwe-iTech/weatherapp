import { useState } from "react";
import "../App.css"
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setweather] = useState([]);
  const [valid, setvalid] = useState(true);
  const [lastcity, setlastcity] = useState([]);
  function fetchdata(){
    if(city === ""){
      setvalid(true)
      setweather([])
    }else{
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bc904f99bdc19d6811d3f46e5850904`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => { 
        console.log(data);
        if(data.cod === 200){
          setvalid(true)
          setweather([data])
          if(lastcity.length === 3){
            lastcity.push(data.name)
            lastcity.shift();
            setlastcity([...lastcity])
          }else{
            lastcity.push(data.name)
            setlastcity([...lastcity])
          }
        }else{
          setvalid(false)
          setweather([])
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };
  console.log(valid); 
  console.log(lastcity);
  return (
    <div className="container" style={{textAlign:"center"}}>
      <h1>Weather App</h1>
      <div style={{margin:"20px auto 0"}}>
        <input
          type="text"
          placeholder="search for city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchdata}>search</button>
      </div>
      <div style={{height:"300px",width:"400px",border:"2px solid yellow",margin:"20px auto 0",background:"lightgreen"}}>
        {
            !valid && city? <div><p style={{fontSize:"20px",color:"red"}}>please enter valid city</p></div>: weather.map((item, i) => {
                return (
                  <div key={i} className="p">
                    <p>Weather Details of City: {item.name}</p>
                    <p>Current Temperature: {Math.floor(item.main.temp-273)} &#8451;</p>
                    <p>Temperature Range: {Math.floor(item.main.temp_min-273)} &#8451; to {Math.floor(item.main.temp_max-273)} &#8451;</p>
                    <p>Humidity: {item.main.humidity}</p>
                    <p>Sea level: {item.timezone}</p>
                    <p>Ground level: {item.visibility}</p>
                  </div>
                );
              })  
        }
      </div>
      <div className="lastcities">
        {
          lastcity.map((c, i)=>{
            return(
              <div key={i}>
                  <p>{c}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
export default Weather;
