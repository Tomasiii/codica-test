import { createContext } from "react";

interface Props {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? Theme.DARK : Theme.LIGHT;

export const ThemeContext = createContext<Props>({
  theme: defaultTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeTheme: () => {},
});
