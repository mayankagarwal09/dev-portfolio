import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuZBtHAhq9RohACFjzcreux7L1JJBnOV0",
  authDomain: "selaka-cv.firebaseapp.com",
  projectId: "selaka-cv",
  storageBucket: "selaka-cv.appspot.com",
  messagingSenderId: "232715702190",
  appId: "1:232715702190:web:baded6bb154a36ee70c23f",
  measurementId: "G-76Q6V7VZQ5"
};


function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
