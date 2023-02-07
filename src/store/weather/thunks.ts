import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {api} from "api";
import {IWeatherCurrentOriginal, IWeatherForecastOriginal} from "types/weather";
import {IWeatherState} from "./index";

const getWeather = createAsyncThunk('weather/getWeather', async (_, {getState}) => {

  const {weather} = getState() as { weather: IWeatherState };
  try {
    const {data} = await api.weather.getWeather(weather.params);
    // console.log( 'data=>', data.data[0])
    return data.data[0] as IWeatherCurrentOriginal
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.request);
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
})

const getWeatherAllDays = createAsyncThunk('weather/getWeatherAllDays', async (_, {getState}) => {

  const {weather} = getState() as { weather: IWeatherState };
  try {
    const {data} = await api.weather.getWeatherAllDays(weather.params)
    // console.log( 'data=>', data.data)
    return data.data as IWeatherForecastOriginal[];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.request);
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
})

export const thunks = {
  getWeather,
  getWeatherAllDays
};