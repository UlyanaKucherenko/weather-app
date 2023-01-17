import {WEB_API_ROUTES} from "api/api-routes";
import {client} from "api/http";

export const weather = {

    getWeather(location) {
        return client.get(`${process.env.REACT_APP_BASE_URL}/${WEB_API_ROUTES.weather.current}?city=${location}&lang=en&key=${process.env.REACT_APP_KEY}`);
    },

    getWeatherAllDays(location) {
        return client.get(`${process.env.REACT_APP_BASE_URL}/${WEB_API_ROUTES.weather.forecast}?city=${location}"&lang=en&key=${process.env.REACT_APP_KEY}`);
    },

};
