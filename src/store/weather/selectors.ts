import { RootState } from 'store';

const selectors = {
    weather : (state:RootState) => state.weather.weather,
    weatherAllDays : (state:RootState) => state.weather.weatherAllDays,
    location : (state:RootState) => state.weather.location,
    fetchingStatusWeather: (state: RootState) => state.weather.fetchingStatusWeather,
    fetchingStatusWeatherAllDays: (state: RootState) => state.weather.fetchingStatusWeatherAllDays,
}

export {selectors}