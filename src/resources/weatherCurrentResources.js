export const weatherCurrentResources = {
    set(payload) {
        const {cityName , temp, weather, appTemp, pres, rh, windSpd} = payload;
        return {
            city: cityName,
            temperatureDay: temp,
            weatherIcon: weather.icon,
            temperatureDescription: weather.description,
            tempFeelsLike: appTemp,
            pressure: pres,
            precipitation: rh,
            wind: windSpd
        };
    }
}