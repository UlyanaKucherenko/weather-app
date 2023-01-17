import 'styled-components';

import { CustomTheme } from 'components/Theme';
import { CSSObject, CSSProp } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSObject | CSSProp;
  }
}