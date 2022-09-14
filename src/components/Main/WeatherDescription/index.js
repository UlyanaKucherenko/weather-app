import {Wrap, WrapImgBg, ContentItem, WrapImg, Img, Title, Text} from "./styled";
import sky from '../../../assets/img/sky.svg'
import evaporator from '../../../assets/img/descriptionDay/evaporator.svg'
import thermometer from '../../../assets/img/descriptionDay/thermometer.svg'
import wind from '../../../assets/img/descriptionDay/wind.svg'
import humidity from '../../../assets/img/descriptionDay/humidity.svg'

import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {formattedTemperature} from "../../../utils/formattedTemperature";

function WeatherDescription() {
  const {weather} = useContext(ThemeContext);

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
         <Text>{weather.data ? Math.floor(weather.data[0].temp) : null}° feels
          like {weather.data ? Math.floor(weather.data[0].appTemp) : null}°</Text>
      </ContentItem>
      <ContentItem>
        <WrapImg>
          <Img src={wind}/>
        </WrapImg>
        <Title>Pressure</Title>
        <Text>{weather.data ? weather.data[0].pres : null} mmHg </Text>
      </ContentItem>
      <ContentItem>
        <WrapImg>
          <Img src={humidity}/>
        </WrapImg>
        <Title>Precipitation</Title>
        <Text>{weather.data ? weather.data[0].rh : null}%</Text>
      </ContentItem>

      <ContentItem>
        <WrapImg>
          <Img src={evaporator}/>
        </WrapImg>
        <Title>Wind</Title>
        <Text>{weather.data ? weather.data[0].windSpd.toFixed(2): null} m/s </Text>
      </ContentItem>
    </Wrap>
  )
}

export default WeatherDescription