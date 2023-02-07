import {Wrap, Title, Img, Text, WrapImg, IconText, WrapIcon} from "./styled";
import {IWeatherForecastCustom} from "types/weather";
import {getIconUrl} from "utils/common";
import {formattedTemperature} from "utils/formattedTemperature";

export const WeatherDaysItem = (
    {
      temperatureDay,
      tempFeelsLike,
      precipitation,
      weatherIcon,
      temperatureDescription,
      timestamp
    }: IWeatherForecastCustom) => {

  const date = new Date(timestamp * 1000);
  const localDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short'
  })

  return (
      <Wrap>
        <Title>{localDate}</Title>
        <WrapIcon>
          <WrapImg>
            <Img src={getIconUrl(weatherIcon)} alt={temperatureDescription}/>
          </WrapImg>
          <IconText>{temperatureDescription}</IconText>
        </WrapIcon>
        <Title>{formattedTemperature(temperatureDay)}°</Title>
        <Text>{formattedTemperature(tempFeelsLike)}°</Text>
        <Text>precipitation: {precipitation}%</Text>
      </Wrap>
  )
};