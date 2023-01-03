import {Wrap, Title, Img, Text, WrapImg, IconText, WrapIcon} from "./styled";

function WeatherDaysItem({day, temperatureDay, tempFeelsLike, precipitation, iconUrl, temperatureDescription}) {

  return (
    <Wrap>
      <Title>{day}</Title>
      <WrapIcon>
        <WrapImg>
          <Img src={iconUrl} alt="sun"/>
        </WrapImg>
        <IconText>{temperatureDescription}</IconText>
      </WrapIcon>
      <Title>{temperatureDay}°</Title>
      <Text>{tempFeelsLike}°</Text>
      <Text>precipitation: {precipitation}%</Text>
    </Wrap>
  )
}

export default WeatherDaysItem