import React from "react";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import "./App.css";

function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({});
  // ...4c496af33d732297c30b641b3b235e47
  async function fetchCityWeather() {
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b0b9a4e99493beeacc6cf0c023e61d4`
    )
      .then((response) => response.json())
      .then((data) => data);
    // console.log("Result is result", data);
    console.log(apiData);
    if (city) {
      setCityWeather({
        data: apiData,
        city: apiData.name,
        visibility: apiData.visibility,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp - 273.15),
        speed: apiData.wind.speed,
        all: apiData.clouds.all,
        error: ""
      });
    } else {
      setCityWeather({
        data: "",
        city: "",
        description: "",
        temperature: "",
        error: "Please Enter valid city"
      });
    }
  }

  return (
    <>
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
      />
      {/* use city weather data to show on screen */}
      <CityWeather
        city={city}
        description={cityWeather.description}
        temperature={cityWeather.temperature}
        visibility={cityWeather.visibility}
        speed={cityWeather.speed}
        all={cityWeather.all}
        error={cityWeather.error}
      />
    </>
  );
}

export default App;
