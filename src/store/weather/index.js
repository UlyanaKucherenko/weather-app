import {createSlice} from '@reduxjs/toolkit';

import {selectors} from "./selectors";
import {thunks} from "./thunks"
import {weatherCurrentResources} from "resources/weatherCurrentResources";
import {weatherForecastResources} from "resources/weatherForecastResources";

const initialState = {
  weather: {},
  weatherAllDays: [],
    location: 'Bitritto'
};

const slice = createSlice({
  name: 'weather',
  initialState: {...initialState},
  reducers: {
      SET_LOCATION:(state,{payload}) => {
          state.location = payload;
      }
  },
  extraReducers: (builder) => {
    builder
        .addCase(thunks.getWeather.fulfilled, (state,{payload}) => {
          state.weather = weatherCurrentResources.set(payload)
        })
        .addCase(thunks.getWeatherAllDays.fulfilled, (state,{payload}) => {
          state.weatherAllDays = payload.map(item => weatherForecastResources.set(item))
        })
  }
});

const weather = {
  actions: slice.actions,
  thunks,
  selectors
};

export {weather};
export default slice.reducer;