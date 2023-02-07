import {
  Wrap,
  ContentTop,
  Day,
  Degree,
  Img,
  Text,
  WrapImg,
  Descr,
} from './styled';
import { useMemo } from 'react';
import { getIconUrl } from 'utils/common';
import { IWeatherCurrentCustom } from 'types/weather';
import { formattedTemperature } from 'utils/formattedTemperature';

export const WeatherDay = ({
  temperatureDay,
  temperatureDescription,
  city,
  weatherIcon,
}: IWeatherCurrentCustom) => {
  const getTime = useMemo(() => {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}`;
  }, []);

  const icon = getIconUrl(weatherIcon);

  return (
    <Wrap>
      <ContentTop>
        <div>
          <Degree>{formattedTemperature(temperatureDay)}°</Degree>
          <Day>Today</Day>
        </div>
        <div>
          <WrapImg>
            <Img
              src={icon}
              alt=""
            />
          </WrapImg>
          <Descr>{temperatureDescription}</Descr>
        </div>
      </ContentTop>
      <Text>Time: {getTime}</Text>
      <Text>City: {city}</Text>
    </Wrap>
  );
};
