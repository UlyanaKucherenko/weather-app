import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {selectors} from "./selectors";
import {thunks} from "./thunks"
import {weatherResources} from "resources/weatherResources";
import {IWeatherCurrentCustom, IWeatherForecastCustom} from "types/weather";
import {Status} from "types/enum";

export type ParamsType = {
  city: string,
  key: string
}

export interface IWeatherState {
  weather: IWeatherCurrentCustom | null;
  weatherAllDays: IWeatherForecastCustom[];
  params: ParamsType;
  fetchingStatusWeather: Status;
  fetchingStatusWeatherAllDays: Status;
}

const initialState: IWeatherState = {
  weather: null,
  weatherAllDays: [],
  params: {
    city: 'Bitritto',
    key: process.env.REACT_APP_KEY || ''
  },
  fetchingStatusWeather: Status.IDLE,
  fetchingStatusWeatherAllDays: Status.IDLE,
};

const slice = createSlice({
  name: 'weather',
  initialState: {...initialState},
  reducers: {
    SET_PARAMS: (state, { payload }: PayloadAction<Partial<ParamsType>>) => {
      state.params = { ...state.params, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(thunks.getWeather.rejected, (state) => {
          state.fetchingStatusWeather = Status.FAIL;
        })

        .addCase(thunks.getWeather.pending, (state) => {
          state.fetchingStatusWeather = Status.PENDING;
        })
        .addCase(thunks.getWeather.fulfilled, (state, {payload}) => {
          if (payload) {
            state.weather = weatherResources.convertApiCurrent(payload)
          }
          state.fetchingStatusWeather = Status.SUCCESS;
        })
        .addCase(thunks.getWeatherAllDays.rejected, (state) => {
          state.fetchingStatusWeatherAllDays = Status.FAIL;
        })

        .addCase(thunks.getWeatherAllDays.pending, (state) => {
          state.fetchingStatusWeatherAllDays = Status.PENDING;
        })

        .addCase(thunks.getWeatherAllDays.fulfilled, (state, {payload}) => {
          if (payload) {
            state.weatherAllDays = payload.map(item => weatherResources.convertApiForecast(item))
          }
          state.fetchingStatusWeatherAllDays = Status.SUCCESS;
        })

  }
});

export const weather = {
  actions: slice.actions,
  thunks,
  selectors
};

export default slice.reducer;