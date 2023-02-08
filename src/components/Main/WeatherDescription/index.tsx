import {
  Wrap,
  WrapImgBg,
  ContentItem,
  WrapImg,
  Img,
  Title,
  Text,
} from './styled';
import sky from 'assets/img/sky.svg';
import evaporator from 'assets/img/descriptionDay/evaporator.svg';
import thermometer from 'assets/img/descriptionDay/thermometer.svg';
import windIcon from 'assets/img/descriptionDay/wind.svg';
import humidity from 'assets/img/descriptionDay/humidity.svg';
import { formattedTemperature } from 'utils/formattedTemperature';
import { IWeatherCurrentCustom } from 'types/weather';

export const WeatherDescription = ({
  temperatureDay,
  tempFeelsLike,
  wind,
  pressure,
  precipitation,
}: IWeatherCurrentCustom) => {
  return (
    <Wrap>
      <WrapImgBg>
        <Img
          src={sky}
          alt="sky"
        />
      </WrapImgBg>

      <ContentItem>
        <WrapImg>
          <Img
            src={thermometer}
            alt="thermometer"
          />
        </WrapImg>
        <Title>Temperature</Title>
        <Text>
          {formattedTemperature(temperatureDay)}° feels like{' '}
          {formattedTemperature(tempFeelsLike)}°
        </Text>
      </ContentItem>
      <ContentItem>
        <WrapImg>
          <Img
            src={windIcon}
            alt=""
          />
        </WrapImg>
        <Title>Pressure</Title>
        <Text>{pressure} mmHg </Text>
      </ContentItem>
      <ContentItem>
        <WrapImg>
          <Img
            src={humidity}
            alt=""
          />
        </WrapImg>
        <Title>Precipitation</Title>
        <Text>{precipitation}%</Text>
      </ContentItem>

      <ContentItem>
        <WrapImg>
          <Img src={evaporator} />
        </WrapImg>
        <Title>Wind</Title>
        <Text>{wind.toFixed(2)} m/s </Text>
      </ContentItem>
    </Wrap>
  );
};
