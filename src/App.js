import MainLayout from "./components/MainLayout";

import {createContext, useState} from 'react';

import {ThemeProvider} from "styled-components";
import {theme} from './theme';
import {GlobalStyles} from './components/Theme';
import {appTheme} from './utils/consts';

export const ThemeContext = createContext({});

function App() {

  const [mode, setMode] = useState(appTheme.dark);
  const onChangeMode = (mode) => {
    if (mode === appTheme.dark) console.log('TEST');
    setMode(mode);
  };


  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyles/>
      <ThemeContext.Provider value={{mode, onChangeMode}}>
        <MainLayout/>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
