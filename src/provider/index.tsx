import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { BaseStyled } from 'theme/BaseStyled';
import { Theme } from 'theme/Theme';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BaseStyled>{children}</BaseStyled>
      </ThemeProvider>
    </>
  );
};
