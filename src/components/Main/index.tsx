import React, { useEffect } from 'react';

import { Wrap, Container, Row } from './styled';
import { WeatherDay } from './WeatherDay';
import { WeatherDescription } from './WeatherDescription';
import { WeatherDays } from './WeatherDays';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { weather } from 'store/weather';
import { Status } from 'types/enum';
import { RLoader } from 'components/RLoader';
import { ApiFailed } from '../ApiFailed';

export const Main = () => {
  const dispatch = useAppDispatch();
  const weatherDay = useAppSelector(weather.selectors.weather);
  const fetchingStatusWeather = useAppSelector(
    weather.selectors.fetchingStatusWeather
  );

  useEffect(() => {
    dispatch(weather.thunks.getWeather());
  }, []);

  useEffect(() => {
    dispatch(weather.thunks.getWeatherAllDays());
  }, []);

  if (!weatherDay) return <ApiFailed />;

  if (
    fetchingStatusWeather === Status.IDLE ||
    fetchingStatusWeather === Status.PENDING
  ) {
    return <RLoader />;
  }

  return (
    <Wrap>
      <Container>
        <Row>
          <WeatherDay {...weatherDay} />
          <WeatherDescription {...weatherDay} />
        </Row>
        <Row>
          <WeatherDays />
        </Row>
      </Container>
    </Wrap>
  );
};
