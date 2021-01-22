
import './App.css';
import NavBar from './navBar';
import Home from './Home/MainHome';
import About from './About/AboutMain';
import Skills from './Skills/MainSkills';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
    </BrowserRouter>
  );
   

}

export default App;
