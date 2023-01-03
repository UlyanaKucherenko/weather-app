import { useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {ThemeProvider} from "styled-components";

import {theme} from 'theme';
import {GlobalStyles} from 'components/Theme';
import MainLayout from "components/MainLayout";
import {themeApp} from "store/themeApp";
import {weather} from "store/weather";


function App() {

  const dispatch = useDispatch();
  const mode = useSelector(themeApp.selectors.themeApp)
  const location = useSelector(weather.selectors.location)

  useEffect(() => {
    dispatch(weather.thunks.getWeather({location}))
    dispatch(weather.thunks.getWeatherAllDays({location}));
  }, [location])

  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyles/>
        <MainLayout/>
    </ThemeProvider>
  );
}

export default App;
