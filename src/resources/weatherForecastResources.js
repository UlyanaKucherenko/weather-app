export const weatherForecastResources = {
    set(payload) {
        const {temp, weather, appMaxTemp, rh} = payload;
        return {
            temperatureDay: temp,
            weatherIcon: weather.icon,
            temperatureDescription: weather.description,
            tempFeelsLike: appMaxTemp,
            precipitation: rh,
        };
    }
}