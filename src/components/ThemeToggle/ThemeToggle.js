import React from 'react';
import { ReactComponent as DarkThemeIcon } from './images/moon2.svg';
import { ReactComponent as LightThemeIcon } from './images/sun2.svg';
import { ToggleButton } from './ToggleButton';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <div className='theme-toggle__container'>
            <ToggleButton darkTheme={theme === 'dark'} onClick={toggleTheme}>
                <LightThemeIcon /> 
                <DarkThemeIcon />
            </ToggleButton>
        </div>
    );
}

export default ThemeToggle;
