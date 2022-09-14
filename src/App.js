import {createContext, useEffect, useState} from 'react';
import {ThemeProvider} from "styled-components";

import {theme} from './theme';
import {GlobalStyles} from './components/Theme';
import {appTheme} from './utils/consts';
import MainLayout from "./components/MainLayout";
import {client} from "./api";


export const ThemeContext = createContext({});

function App() {
  const [weather, setWeather] = useState({})
  const [weatherAllDays, setWeatherAllDays] = useState({})
  const [location, setLocation] = useState(JSON.parse(localStorage.getItem('location')) || 'Bitritto');

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('theme')) || appTheme.light);

  const onChangeMode = (mode) => {
    localStorage.setItem('theme', JSON.stringify(mode));
    setMode(mode);
  }

  const setUrl = (meta, location) => {
    return `https://api.weatherbit.io/v2.0/${meta}?city=${location}&lang=en&key=${process.env.REACT_APP_KEY}`
  }

  const onChangedLocation = (location) => {
    setLocation(location)
    localStorage.setItem('location', JSON.stringify(location));

    client.get(setUrl('current', location)).then(response => {
      setWeather(response.data)
      console.log(response.data.data[0])
    })

    client.get(setUrl('forecast/daily', location)).then(response => {
      setWeatherAllDays(response.data)
      console.log(response.data.data)
    })
  }

  useEffect(() => {
    onChangedLocation(location)
  }, [location])

  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyles/>
      <ThemeContext.Provider value={{mode, onChangeMode, weather, weatherAllDays, onChangedLocation}}>
        <MainLayout/>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
