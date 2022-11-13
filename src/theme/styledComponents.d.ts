import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallette: {
      background: {
        default: string;
        border: string;
      };

      text: {
        primary: string;

        titleList: string;
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
