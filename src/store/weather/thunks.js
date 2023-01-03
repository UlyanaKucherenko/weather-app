import {createAsyncThunk} from "@reduxjs/toolkit";

import {api} from "api";

const getWeather = createAsyncThunk('weather/getWeather',async ({location}) => {
    try {
        const {data} = await api.weather.getWeather(location)
        // console.log( 'data=>', data.data[0])
        return data.data[0]
    }catch (err){
        console.log('ERR=>', err)
    }
})

const getWeatherAllDays = createAsyncThunk('weather/getWeatherAllDays',async ({location}) => {
    try {
        const {data} = await api.weather.getWeatherAllDays(location)
        // console.log( 'data=>', data.data)
        return data.data
    }catch (err){
        console.log('ERR=>', err)
    }
})

const thunks = {
    getWeather,
    getWeatherAllDays
};

export {thunks};