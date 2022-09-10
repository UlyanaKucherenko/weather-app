import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {Wrap, ContentTop, Day, Degree, Img, Text, WrapImg,Descr} from "./styled";
import {formattedTemperature} from "../../../utils/formattedTemperature";

function WeatherDay() {

  const {weather} = useContext(ThemeContext);
  const iconUrl = `http://openweathermap.org/img/wn/${ weather.weather && weather.weather[0].icon.slice(0,2)}d@2x.png`

  function getTime() {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}`;
  }

  return (
    <Wrap>
      <ContentTop>
        <div>
          <Degree>
            {weather.main ? formattedTemperature(weather.main.temp) : null}°
          </Degree>
          <Day>Today</Day>
        </div>
        <div>
          <WrapImg>
            <Img src={iconUrl} />
          </WrapImg>
          <Descr>{weather.weather && weather.weather[0].description}</Descr>
        </div>
      </ContentTop>
      <Text>Time: {getTime()}</Text>
      <Text>City: {weather.name}</Text>
    </Wrap>
  )
}

export default WeatherDay