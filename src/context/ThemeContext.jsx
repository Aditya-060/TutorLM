import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved preference or system preference on mount
        const savedTheme = localStorage.getItem('tutorlm-theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Apply dark class to document element
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('tutorlm-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('tutorlm-theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
