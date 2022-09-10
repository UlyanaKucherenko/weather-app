import {appTheme} from '../utils/consts';

export const theme = {
  [appTheme.light]: {
    bg: '#F3F6FA',
    bgBox: '#ffffff',
    text: '#000000',
    bgSmallBox: 'rgba(71, 147, 255, 0.2)',
    selectBg: 'rgba(71, 147, 255, 0.2)',
    selectBgHover: '#4793ff57'
  },
  [appTheme.dark]: {
    bg: '#0D1117',
    bgBox: '#4F4F4F',
    text: '#ffffff',
    bgSmallBox: '#2E3035',
    selectBg: '#4F4F4F',
    selectBgHover: '#363535'
  },
};