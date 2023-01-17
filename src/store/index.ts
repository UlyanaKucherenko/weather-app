import {combineReducers, configureStore} from "@reduxjs/toolkit";

//MODULES
import themeApp from "store/themeApp";
import weather from "store/weather";

const rootReducer = combineReducers({
    weather,
    themeApp
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;