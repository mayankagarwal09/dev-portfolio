import React, { useMemo } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
require('dotenv').config()

function App() {
  window.matchMedia = null;
  const BASE_NAME = process.env.REACT_APP_BASE_NAME;
  const darkMode = useDarkMode(true);
  const mode = useMemo(() => ({ darkMode }), []);
  return (
    <AppContext.Provider value={mode}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter basename="/e-portfolio">
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
