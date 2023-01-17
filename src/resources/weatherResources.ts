import {IWeatherCurrentOriginal , IWeatherForecastOriginal} from 'types/weather';

 const weatherResources = {
    convertApiCurrent(payload: IWeatherCurrentOriginal) {
        const {city_name, temp, weather, app_temp, pres, rh, wind_spd} = payload;
        return {
            city: city_name,
            temperatureDay: temp,
            weatherIcon: weather.icon,
            temperatureDescription: weather.description,
            tempFeelsLike: app_temp,
            pressure: pres,
            precipitation: rh,
            wind: wind_spd
        };
    },

     convertApiForecast(payload: IWeatherForecastOriginal) {
         const {temp, weather, app_max_temp, rh} = payload;
         return {
             temperatureDay: temp,
             weatherIcon: weather.icon,
             temperatureDescription: weather.description,
             tempFeelsLike: app_max_temp,
             precipitation: rh,
         };
     }
}

export {weatherResources}