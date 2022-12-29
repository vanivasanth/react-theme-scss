import { useContext } from 'react';
import ThemeProvider from './Contexts/ThemeProvider';
import ThemeContext from './Contexts/ThemeContext';
import './App.scss';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const switchTheme=()=>{
    setTheme(theme==='light'?'dark':'light')
  }
  return (
   
    <div className="App" data-theme={theme}>
         
         <div className="card">
           <div className="card-header">
                            change of theme
           </div>
           <div className="card-body">
           {theme==='light'?<p>Light mode</p>:<p>Dark mode</p>}
          <button className="btn btn-primary" onClick={switchTheme}>
            switch theme</button>
          </div>
          </div>
          
       
       
    </div>
  );
}

export default App;
