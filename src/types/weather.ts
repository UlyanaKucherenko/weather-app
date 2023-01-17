
interface IWeatherCurrentOriginal {
    city_name: string,
    temp: number,
    weather: {
        icon: string;
        description: string;
    },
    app_temp: number,
    pres: number,
    rh: number,
    wind_spd: number
}


interface IWeatherCurrentCustom {
    city: string;
    temperatureDay: number;
    weatherIcon: string;
    temperatureDescription: string;
    tempFeelsLike: number;
    pressure: number;
    precipitation: number;
    wind: number;
}

interface IWeatherForecastOriginal {
    temp: number,
    weather: {
        icon: string;
        description: string;
    },
    app_max_temp: number,
    rh: number,
}

interface IWeatherForecastCustom {
    temperatureDay: number,
    weatherIcon: string;
    temperatureDescription: string;
    tempFeelsLike: number,
    precipitation: number,
}

export type {IWeatherCurrentOriginal, IWeatherForecastOriginal, IWeatherCurrentCustom,IWeatherForecastCustom};