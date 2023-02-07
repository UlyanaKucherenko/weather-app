import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { useAppSelector } from 'hooks/redux-hooks';
import { ThemeEnum } from 'types/enum';
import { themeApp as themeSlice } from 'store/themeApp';

interface ThemeProps {
  children: ReactNode;
}

const theme = {
  [ThemeEnum.LIGHT]: {
    bg: '#F3F6FA',
    bgBox: '#ffffff',
    text: '#000000',
    bgSmallBox: 'rgba(71, 147, 255, 0.2)',
    selectBg: 'rgba(71, 147, 255, 0.2)',
    selectBgHover: '#4793ff57',
  },
  [ThemeEnum.DARK]: {
    bg: '#0D1117',
    bgBox: '#4F4F4F',
    text: '#ffffff',
    bgSmallBox: '#2E3035',
    selectBg: '#4F4F4F',
    selectBgHover: '#363535',
  },
};

function Theme({ children }: ThemeProps) {
  const mode = useAppSelector(themeSlice.selectors.mode);

  return <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>;
}

export type CustomTheme = (typeof theme)[ThemeEnum.LIGHT];
export default Theme;
