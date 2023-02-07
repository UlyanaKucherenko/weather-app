import { RootState } from 'store';

const selectors = {
  weather: (state: RootState) => state.weather.weather,
  weatherAllDays: (state: RootState) => state.weather.weatherAllDays,
  params: (state: RootState) => state.weather.params,
  fetchingStatusWeather: (state: RootState) =>
    state.weather.fetchingStatusWeather,
  fetchingStatusWeatherAllDays: (state: RootState) =>
    state.weather.fetchingStatusWeatherAllDays,
};

export { selectors };
