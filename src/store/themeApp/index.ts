import {createSlice} from "@reduxjs/toolkit";

import {ThemeEnum} from "types/enum";
import {selectors} from "./selectors"

export interface ITheme {
    mode: ThemeEnum;
}

const initialState: ITheme = {
    mode: ThemeEnum.DARK
};

const slice = createSlice({
    name: 'themeApp',
    initialState,
    reducers: {
        SET_THEME: (state) => {
            state.mode = state.mode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
            ;
        }
    }
});

export const themeApp = {
    actions: slice.actions,
    selectors
}

export default slice.reducer;