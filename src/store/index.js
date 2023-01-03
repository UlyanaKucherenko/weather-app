import {configureStore} from "@reduxjs/toolkit";

//MODULES
import themeApp from "./themeApp";
import weather from "./weather";


export default configureStore({
  reducer: {
    weather,
    themeApp
  }
});
