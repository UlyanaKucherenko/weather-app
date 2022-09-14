import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {Wrap, ContentTop, Day, Degree, Img, Text, WrapImg,Descr} from "./styled";
import {formattedTemperature} from "../../../utils/formattedTemperature";

function WeatherDay() {

  const {weather} = useContext(ThemeContext);
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${weather.data && weather.data[0].weather.icon}.png`


  function getTime() {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}`;
  }

  return (
    <Wrap>
      <ContentTop>
        <div>
          <Degree>
            { weather.data ? Math.floor(weather.data[0].temp) : null}°
          </Degree>
          <Day>Today</Day>
        </div>
        <div>
          <WrapImg>
            <Img src={iconUrl} />
          </WrapImg>
          <Descr>{weather.data && weather.data[0].weather.description}</Descr>
        </div>
      </ContentTop>
      <Text>Time: {getTime()}</Text>
      <Text>City: {weather.data && weather.data[0].cityName}</Text>
    </Wrap>
  )
}

export default WeatherDay