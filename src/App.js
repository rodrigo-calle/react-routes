import {  Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Pricing from './components/Pricing';

function App() {
  return (
    <>
    
      <div className="navBar">        
          <Link className="navBar__link" to="/home">HOME</Link>
          <Link className="navBar__link" to="/pricing">PRICING</Link>  
          <Link className="navBar__link" to="/about">ABOUT</Link>             
      </div>

        <Routes>
          <Route path="/" element={ < Home />} />
          <Route path="/about" element={ < About />} />
          <Route path="/pricing" element={ < Pricing />} />
          <Route path="*" element={ < Home />} />
        </Routes>
    </>
  );
}

export default App;
