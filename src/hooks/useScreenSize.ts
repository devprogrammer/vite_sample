import { useEffect, useState } from "react";
import useScreenType from "react-screentype-hook";
import { ScreenSize } from "../constants/screensize";

export const useScreenSize = () => {
  const {isMobile, isTablet, isDesktop, isLargeDesktop } = useScreenType(ScreenSize);
  const [screen, setScreen] = useState(1);
  useEffect(() => {
    isMobile || isTablet ? setScreen(0) :
    isDesktop ? setScreen(1) : setScreen(2);
  }, [isMobile, isTablet, isDesktop, isLargeDesktop])
  return screen;
}