import { useMediaQuery } from 'react-responsive';

export const useGetDevice = () => {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });
  const isTabletAndDesktop = useMediaQuery({ minWidth: 768 });

  return { isMobile, isTabletAndDesktop };
};
