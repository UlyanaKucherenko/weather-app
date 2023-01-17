import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {api} from "api";
import {IWeatherCurrentOriginal, IWeatherForecastOriginal} from "types/weather";

const getWeather = createAsyncThunk('weather/getWeather', async (location:string) => {
    try {
        const {data} = await api.weather.getWeather(location)
        // console.log( 'data=>', data.data[0])
        return data.data[0] as IWeatherCurrentOriginal
    }catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.request);
        } else if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
})

const getWeatherAllDays = createAsyncThunk('weather/getWeatherAllDays', async (location:string) => {
    try {
        const {data} = await api.weather.getWeatherAllDays(location)
        // console.log( 'data=>', data.data)
        return data.data as IWeatherForecastOriginal[]
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