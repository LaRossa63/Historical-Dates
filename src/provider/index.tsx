import { useSelectedDate } from 'hooks';
import { FC } from 'react';
import { DateContext } from 'store/Context';
import { ThemeProvider } from 'styled-components';

import { BaseStyled } from 'theme/BaseStyled';
import { Theme } from 'theme/Theme';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <DateContext.Provider value={useSelectedDate()}>
        <ThemeProvider theme={Theme}>
          <BaseStyled>{children}</BaseStyled>
        </ThemeProvider>
      </DateContext.Provider>
    </>
  );
};
