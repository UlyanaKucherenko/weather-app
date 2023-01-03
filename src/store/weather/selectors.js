const selectors = {
    weather : (state) => state.weather.weather,
    weatherAllDays : (state) => state.weather.weatherAllDays,
    location : (state) => state.weather.location,
}

export {selectors}