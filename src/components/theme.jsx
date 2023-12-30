import React, { useState, useEffect } from 'react';
import '../styles/Index.css';
import { Theme } from 'daisyui';

function ThemedButton() {
  // Check localStorage for the theme preference or use a default value
  const storedTheme = localStorage.getItem('theme') || 'emerald';
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'luxury' ? 'emerald' : 'luxury';
    setTheme(newTheme);
    // Store the theme preference in localStorage
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Apply the theme to the HTML tag
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Set the initial value of the checkbox based on the stored theme
    const checkbox = document.querySelector('.theme-controller');
    if (checkbox) {
      checkbox.checked = theme === 'luxury';
    }
  }, [theme]);

  return (
    <input
      type="checkbox"
      value="synthwave"
      onChange={toggleTheme}
      className="toggle theme-controller"
      checked={theme === 'luxury'}
    />
  );
}

export default ThemedButton;
