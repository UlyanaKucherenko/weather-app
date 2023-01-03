import {useSelector} from "react-redux";

import {Wrap, WrapImgBg, ContentItem, WrapImg, Img, Title, Text} from "./styled";
import sky from 'assets/img/sky.svg'
import evaporator from 'assets/img/descriptionDay/evaporator.svg'
import thermometer from 'assets/img/descriptionDay/thermometer.svg'
import wind from 'assets/img/descriptionDay/wind.svg'
import humidity from 'assets/img/descriptionDay/humidity.svg'
import {weather} from "store/weather";

function WeatherDescription() {
    const _weather = useSelector(weather.selectors.weather)

    return (
    <Wrap>
      <WrapImgBg>
        <Img src={sky}/>
      </WrapImgBg>

      <ContentItem>
        <WrapImg>
          <Img src={thermometer}/>
        </WrapImg>
        <Title>Temperature</Title>
         <Text>{_weather ? Math.floor(_weather.temperatureDay) : null}° feels
          like {_weather ? Math.floor(_weather.tempFeelsLike) : null}°</Text>
      </ContentItem>
      <ContentItem>
        <WrapImg>
          <Img src={wind}/>
        </WrapImg>
        <Title>Pressure</Title>
        <Text>{_weather ? _weather.pressure : null} mmHg </Text>
      </ContentItem>
      <ContentItem>
        <WrapImg>
          <Img src={humidity}/>
        </WrapImg>
        <Title>Precipitation</Title>
        <Text>{_weather ? _weather.precipitation : null}%</Text>
      </ContentItem>

      <ContentItem>
        <WrapImg>
          <Img src={evaporator}/>
        </WrapImg>
        <Title>Wind</Title>
        <Text>{_weather.wind ? _weather.wind.toFixed(2): null} m/s </Text>
      </ContentItem>
    </Wrap>
  )
}

export default WeatherDescription