import { useGetDevice } from 'hooks';

import { MainPage as MobileMainPage } from './Device/Mobile';
import { MainPage as TabletAndDesktopMainPage } from './Device/TabletAndDesktop';

export const AppContent = () => {
  const { isMobile, isTabletAndDesktop } = useGetDevice();

  if (isMobile) {
    return <MobileMainPage />;
  }

  if (isTabletAndDesktop) {
    return <TabletAndDesktopMainPage />;
  }

  return <h1>Not find Page</h1>;
};
