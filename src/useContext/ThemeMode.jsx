import React, { useState } from "react";
import { ThemeModeContext } from "./GlobalContext";

function ThemeMode({ children }) {
  const [themeMode, setThemeMode] = useState('light');
  console.log(themeMode);
  return (
    <ThemeModeContext.Provider value={{themeMode, setThemeMode}}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export default ThemeMode;
