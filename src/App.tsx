import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks/redux-hooks';

import MainLayout from "components/MainLayout";
import {weather} from "store/weather";

const App = () => {

    const dispatch = useAppDispatch();
    const location = useAppSelector(weather.selectors.location)

    const getWeather = async () => {
        await dispatch(weather.thunks.getWeather(location))
    };
    const getWeatherAllDays = async () => {
        await dispatch(weather.thunks.getWeatherAllDays(location))
    };

    useEffect(() => {
        getWeather()
        getWeatherAllDays()
    }, [location])

    return <MainLayout/>;
}

export default App;