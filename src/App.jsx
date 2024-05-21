import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'


function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const Background = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'} >
        <h1>Background Colour Simulation</h1>
        <button onClick={Background} >
          {isDarkMode ? 'White' : 'Dark'}
        </button>
      </div>

   
    </>
  );
}

export default App;
