
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useState<Theme>('light');
  const actualTheme = 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Always apply light theme
    root.classList.remove('light', 'dark');
    root.classList.add('light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: () => {}, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
