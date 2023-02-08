import { RootState } from 'store';

export const selectors = {
  mode: (state: RootState) => state.themeApp.mode,
};
