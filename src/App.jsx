import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
  window.matchMedia = null;
  const darkMode = useDarkMode(true);
  if (window.location.href.includes('#')) {
    const history = useHistory();
    const path = window.location.href.replace('#', '');
    console.log('pushing to router');
    console.log(path);
    console.log(history);
    history.push(path);
  }
  return (
    <AppContext.Provider value={{ darkMode }}>
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
