import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeModeContext } from "./GlobalContext";
import { common, deepPurple, grey } from "@mui/material/colors";

function AppThemeProvider({ children }) {
  const { themeMode } = React.useContext(ThemeModeContext);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          themeMode,
          ...(themeMode === "light"
            ? {
                // // palette values for light mode
                primary: deepPurple,
                secondary: deepPurple,
                background: {
                  default: deepPurple[50],
                  login: deepPurple[100],
                },
                button: {
                  active: deepPurple[300],
                },
                text: {
                  primary: common.black,
                  secondary: common.white,
                  pagination: common.black,
                },
              }
            : {
                // palette values for dark mode
                mode: "dark",
                primary: grey,
                secondary: grey,
                background: {
                  default: grey[800],
                  login: grey[500],
                  body: "rgba(255, 255, 255, 0.3)",
                },
                text: {
                  primary: common.white,
                  secondary: common.black,
                  pagination: common.black,
                },
              }),
        },
      }),
    [themeMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
