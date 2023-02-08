import { WEB_API_ROUTES } from 'api/api-routes';
import { client } from 'api/http';
import { ParamsType } from 'store/weather';

export const weather = {
  async getWeather(params: ParamsType) {
    return await client.get(
      `${process.env.REACT_APP_BASE_URL}/${WEB_API_ROUTES.weather.current}`,
      { params }
    );
  },

  async getWeatherAllDays(params: ParamsType) {
    return await client.get(
      `${process.env.REACT_APP_BASE_URL}/${WEB_API_ROUTES.weather.forecast}`,
      { params }
    );
  },
};
