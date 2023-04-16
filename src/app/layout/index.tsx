import { SafeArea } from "antd-mobile";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import { AppRoutes } from "../route/AppRoute";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent, Wrapper } from "./style";
import { Helmet } from "react-helmet-async";

export const ScreenContext = createContext(1);
interface Props {
  children: React.ReactNode;
}
export const AppLayout: React.FC<Props> = ({ children }) => {
    const screensize = useScreenSize();
  const { pathname } = useLocation();

  // const isRoom = pathname === AppRoutes.DataRoom.Room;
  const isRoom = pathname.indexOf(AppRoutes.main.request) === 0;

  return (
    <ScreenContext.Provider value={screensize}>
      <Helmet>
        <title>Tyket</title>
        <meta name="Tyket" content="Travel app" />
      </Helmet>
      <Wrapper>
          <div>
              <SafeArea position='top' />
          </div>
          <Header />
          <MainContent>
              <div className="flex flex-col flex-1 h-[calc(100vh-60px)]">
                  {/* <div className="flex-1 h-[calc(100%-300px)] overflow-auto"> */}
                  <div className="flex-1 overflow-auto">
                      {children}
                  </div>
                  {/* { isRoom || <Footer /> } */}
              </div>
          </MainContent>
          <div>
              <SafeArea position='bottom' />
          </div>
      </Wrapper>
    </ScreenContext.Provider>
  )
};