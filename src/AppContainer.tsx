import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./app/theme/detault-theme";
import { useLocalStorage } from "./hooks/useLocalStorage";
// import { switchTheme } from "./redux/actions/appActions";
import { useAppDispatch, useAppSelector } from "./redux/store";

interface AppContainerProps {
    children: any;
};

export const AppContainer: React.FC<AppContainerProps> = ({children}) => {
    
    const dispatch = useAppDispatch();
    const [theme] = useLocalStorage("theme", "light");
    // const isDark: boolean = useAppSelector((state: any) => state.app.isDark);  
    // useEffect(() => {
    //     if (theme === "dark") {
    //         dispatch(switchTheme(true));
    //     } else {
    //         dispatch(switchTheme(false));
    //     }
    // }, [dispatch, theme]);
    
    return (
        // <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <ThemeProvider theme={lightTheme}>
            <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
    )
}