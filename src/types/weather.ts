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

interface IWeatherForecastCustom {
  temperatureDay: number;
  weatherIcon: string;
  temperatureDescription: string;
  tempFeelsLike: number;
  precipitation: number;
  timestamp: number;
}

type WeatherCode = {
  icon: string;
  description: string;
};

interface IWeatherCurrentOriginal {
  city_name: string;
  temp: number;
  weather: WeatherCode;
  app_temp: number;
  pres: number;
  rh: number;
  wind_spd: number;
}

interface IWeatherForecastOriginal {
  temp: number;
  weather: WeatherCode;
  app_max_temp: number;
  rh: number;
  ts: number;
}

export type {
  IWeatherCurrentOriginal,
  IWeatherForecastOriginal,
  IWeatherCurrentCustom,
  IWeatherForecastCustom,
};
