import {WEB_API_ROUTES} from "api/api-routes";

import {client} from "api/http";

export const weather = {

  getWeather(location) {
    // return Promise.resolve({
    //  data:{ data:[
    //     {
    //       "appTemp": 7.8,
    //       "aqi": 85,
    //       "cityName": "Bitritto",
    //       "clouds": 5,
    //       "countryCode": "IT",
    //       "datetime": "2022-12-27:23",
    //       "dewpt": 7.9,
    //       "dhi": 0,
    //       "dni": 0,
    //       "elev_angle": -67.42,
    //       "ghi": 0,
    //       "gust": 1.54,
    //       "h_angle": -90,
    //       "lat": 41.04336,
    //       "lon": 16.82682,
    //       "ob_time": "2022-12-27 23:48",
    //       "pod": "n",
    //       "precip": 0,
    //       "pres": 1016.0591,
    //       "rh": 100,
    //       "slp": 1026.5082,
    //       "snow": 0,
    //       "solar_rad": 0,
    //       "sources": [
    //         "analysis",
    //         "E4388"
    //       ],
    //       "state_code": "13",
    //       "station": "E4388",
    //       "sunrise": "06:16",
    //       "sunset": "15:31",
    //       "temp": 7.8,
    //       "timezone": "Europe/Rome",
    //       "ts": 1672184937,
    //       "uv": 0,
    //       "vis": 16,
    //       "weather": {
    //         "description": "Clear sky",
    //         "code": 800,
    //         "icon": "c01n"
    //       },
    //       "wind_cdir": "WSW",
    //       "wind_cdir_full": "west-southwest",
    //       "wind_dir": 255,
    //       "windSpd": 1.54
    //     }
    //
    // ]}})
    // return Promise.resolve({})
    return client.get(`${process.env.REACT_APP_BASE_URL}/${WEB_API_ROUTES.weather.current}?city=${location}&lang=en&key=${process.env.REACT_APP_KEY_NEW}`);
  },

  getWeatherAllDays(location) {
    // return Promise.resolve({
    //   data: {
    //   data: [
    //     {
    //       "valid_date": "2017-04-01",
    //       "ts": 1503954000,
    //       "datetime": "2017-04-01",
    //       "wind_gust_spd": 16.7,
    //       "wind_spd": 6.4,
    //       "wind_dir": 45,
    //       "wind_cdir": "NE",
    //       "wind_cdir_full": "northeast",
    //       "temp": 25,
    //       "max_temp": 30,
    //       "min_temp": 26,
    //       "high_temp": 30,
    //       "low_temp": 24.5,
    //       "appMaxTemp": 30.64,
    //       "app_min_temp": 23.64,
    //       "pop": 0,
    //       "precip": 0,
    //       "snow": 0,
    //       "snow_depth": 0,
    //       "slp": 1017,
    //       "pres": 1003.5,
    //       "dewpt": 17.8,
    //       "rh": 64.3,
    //       "weather": {
    //         "icon": "c04d",
    //         "code": "804",
    //         "description": "Overcast clouds"
    //       },
    //       "clouds_low": 25,
    //       "clouds_mid": 100,
    //       "clouds_hi": 50,
    //       "clouds": 100,
    //       "vis": 10,
    //       "max_dhi": 178,
    //       "uv": 2,
    //       "moon_phase": 0.99,
    //       "moon_phase_lunation": 0.48,
    //       "moonrise_ts": 1530341260,
    //       "moonset_ts": 1530351260,
    //       "sunrise_ts": 1530321260,
    //       "sunset_ts": 1530391260
    //     },
    //     {
    //       "valid_date": "2017-04-01",
    //       "ts": 1503954000,
    //       "datetime": "2017-04-01",
    //       "wind_gust_spd": 16.7,
    //       "wind_spd": 6.4,
    //       "wind_dir": 45,
    //       "wind_cdir": "NE",
    //       "wind_cdir_full": "northeast",
    //       "temp": 25,
    //       "max_temp": 30,
    //       "min_temp": 26,
    //       "high_temp": 30,
    //       "low_temp": 24.5,
    //       "appMaxTemp": 30.64,
    //       "app_min_temp": 23.64,
    //       "pop": 0,
    //       "precip": 0,
    //       "snow": 0,
    //       "snow_depth": 0,
    //       "slp": 1017,
    //       "pres": 1003.5,
    //       "dewpt": 17.8,
    //       "rh": 64.3,
    //       "weather": {
    //         "icon": "c04d",
    //         "code": "804",
    //         "description": "Overcast clouds"
    //       },
    //       "clouds_low": 25,
    //       "clouds_mid": 100,
    //       "clouds_hi": 50,
    //       "clouds": 100,
    //       "vis": 10,
    //       "max_dhi": 178,
    //       "uv": 2,
    //       "moon_phase": 0.99,
    //       "moon_phase_lunation": 0.48,
    //       "moonrise_ts": 1530341260,
    //       "moonset_ts": 1530351260,
    //       "sunrise_ts": 1530321260,
    //       "sunset_ts": 1530391260
    //     },
    //   ],
    //   "city_name": "Raleigh",
    //   "lon": "-78.63861",
    //   "timezone": "America\/New_York",
    //   "lat": "35.7721",
    //   "country_code": "US",
    //   "state_code": "NC"
    // }})

    // return Promise.resolve({})
    return client.get(`${process.env.REACT_APP_BASE_URL}/${WEB_API_ROUTES.weather.forecast}?city=${location}&lang=en&key=${process.env.REACT_APP_KEY_NEW}`);
  },

};
