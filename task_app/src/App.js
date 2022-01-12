import './App.css';
import Main from './Components/Main';
import ThemeContext ,{themes} from '../src/theme-context'
import { useState } from 'react';

function App() {
  const[theme,setTheme] = useState(themes.dark)
  const ToggleTheme = () => theme ===themes.dark
  ?setTheme(themes.light)
  :setTheme(themes.dark)
  return (
    <ThemeContext.Provider value={theme}>
      <Main toggle={ToggleTheme}/>
    </ThemeContext.Provider>
  );
}

export default App;
