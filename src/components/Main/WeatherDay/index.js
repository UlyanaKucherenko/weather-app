import {useSelector} from "react-redux";

import {weather} from "store/weather";
import {Wrap, ContentTop, Day, Degree, Img, Text, WrapImg,Descr} from "./styled";

function WeatherDay() {

  const _weather = useSelector(weather.selectors.weather)
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${_weather && _weather.weatherIcon}.png`

  function getTime() {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}`;
  }

  return (
    <Wrap>
      <ContentTop>
        <div>
          <Degree>
            { _weather ? Math.floor(_weather.temperatureDay) : null}°
          </Degree>
          <Day>Today</Day>
        </div>
        <div>
          <WrapImg>
            <Img src={iconUrl} />
          </WrapImg>
          <Descr>{_weather.temperatureDescription}</Descr>
        </div>
      </ContentTop>
      <Text>Time: {getTime()}</Text>
      <Text>City: {_weather.city}</Text>
    </Wrap>
  )
}

export default WeatherDay