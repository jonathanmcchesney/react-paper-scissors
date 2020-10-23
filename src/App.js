import React from 'react';
import Game from './components/Game';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => { 
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme) 
  };
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme: lightTheme}>
      <GlobalStyles />
      <div className="App">
        <Game theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider> 
  );
}

export default App;
