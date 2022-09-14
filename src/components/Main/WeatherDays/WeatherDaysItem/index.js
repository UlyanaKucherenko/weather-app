import {Wrap, Title, Img, Text, WrapImg, IconText, WrapIcon} from "./styled";
import {formattedTemperature} from "../../../../utils/formattedTemperature";

function WeatherDaysItem({day, temp, feelsLike, humidity, iconUrl, iconText}) {

  return (
    <Wrap>
      <Title>{day}</Title>
      <WrapIcon>
        <WrapImg>
          <Img src={iconUrl} alt="sun"/>
        </WrapImg>
        <IconText>{iconText}</IconText>
      </WrapIcon>
      <Title>{temp}°</Title>
      <Text>{feelsLike}°</Text>
      <Text>precipitation: {humidity}%</Text>
    </Wrap>
  )
}

export default WeatherDaysItem