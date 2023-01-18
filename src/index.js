import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppThemeProvider from "./useContext/AppThemeProvider";
import SearchProvider from "./useContext/SearchProvider";
import ThemeMode from "./useContext/ThemeMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
          <ThemeMode>
            <AppThemeProvider>
              <App />
            </AppThemeProvider>
          </ThemeMode>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
