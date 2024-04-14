// Import necessary dependencies and assets
import { useEffect, useState } from 'react'; // React hooks
import reactLogo from './assets/react.svg'; // React logo
import viteLogo from '/vite.svg'; // Vite logo
import './App.css'; // Styles

// Import icons for dark and light modes
import SunIcon from "./assets/Sun.svg?react"; // Sun icon for light mode
import MoonIcon from './assets/Moon.svg?react'; // Moon icon for dark mode

function App() {
  const [count, setCount] = useState(0); // State for count
  const [theme, setTheme] = useState('dark'); // State for theme

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Save theme preference in local storage
    localStorage.theme = newTheme;
  };

  // Return to system theme
  const returnToSystemTheme = () => {
    // Remove theme preference from local storage
    localStorage.removeItem('theme');
    // Set theme based on system preference
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  };

  // Effect to set theme based on local storage or system preference
  useEffect(() => {
    if ('theme' in localStorage) {
      setTheme(localStorage.theme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  // Effect to add or remove 'dark' class from document element based on theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Effect to listen for changes in system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  // Render UI components
  return (
    <div className=" bg-slate-300 dark:bg-slate-700 flex flex-col items-center h-screen">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="size-20 m-5" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-20 m-5" alt="React logo" />
        </a>
      </div>
      <h1 className="text-blue-600 text-5xl p-10 font-bold">Vite + React</h1>
      <button className=" bg-red-400 dark:bg-red-950 text-slate-950 dark:text-slate-200 text-2xl h-10 px-5 rounded-lg m-2 font-semibold" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <div className="flex flex-col items-center border-slate-400 dark:border-slate-600 border-2 m-5 p-5 rounded-xl">
        <div className="size-12 flex items-center m-8" onClick={toggleTheme} >
          <MoonIcon className="m-auto dark:hidden stroke-black dark:stroke-slate-200 size-8 active:size-9 sm:hover:size-9" />
          <SunIcon className="m-auto hidden dark:flex stroke-black dark:stroke-slate-200 size-8 active:size-9 sm:hover:size-9" />
        </div>

        <button className="text-black dark:text-slate-200 underline mb-3" onClick={returnToSystemTheme}>Return to System mode</button>
      </div>

      <p className="text-black dark:text-slate-200 font-light">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="text-black dark:text-slate-200 font-light">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
