import { DefaultTheme } from "styled-components";
import { darkColor, lightColor } from "./colors";

export const lightTheme: DefaultTheme = {
    color: lightColor,
    transition: {
        fast: 'transition: 100ms',
        default: 'transition: 250ms',
        slow: 'transition: 350ms'
      },
}

export const darkTheme: DefaultTheme = {
    color: darkColor,
    transition: {
        fast: 'transition: 100ms',
        default: 'transition: 250ms',
        slow: 'transition: 350ms'
      },
}