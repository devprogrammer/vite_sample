import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../route/AppRoute";
import { Wrapper } from "./Header.style";

export const Header = () => {

  const { pathname } = useLocation();
  
  return (
    <Wrapper>
        <div className="flex flex-1 justify-between px-[150px] h-[60px]">
        </div>
    </Wrapper>
  )
};