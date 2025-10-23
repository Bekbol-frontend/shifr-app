import { Grid } from "antd";

const { useBreakpoint } = Grid;

export const useResponsive = () => {
  const screens = useBreakpoint();

  const isMobile = screens.xs && !screens.sm;
  const isDesktop = screens.lg;

  return {
    isMobile,
    isDesktop,
  };
};
