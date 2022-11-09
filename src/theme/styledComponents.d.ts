import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallette: {
      background: {
        default: string;
      };

      text: {
        primary: string;
        secondary: string;

        title: string;
      };
    };

    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeightRegular: string;
      fontWeightBold: string;
    };
  }
}
