import React from 'react';
import Game from './components/Game';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
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
