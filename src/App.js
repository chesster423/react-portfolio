import './App.css';
import './index.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './components/Home';
import GameReviews from './components/GameReviews';
import Portfolio from './components/Portfolio';

function App() { 

  const pathName = useLocation().pathname;

  return (
    <div className="App">
      
      <header className="App-header">
        <Navigation pathName={pathName}></Navigation>        
      </header>

      <div id='content' className='min-h-screen'>
        <Routes> 
            <Route exact path='/' element={< Home />}></Route> 
            <Route exact path='/game-reviews' element={< GameReviews />}></Route> 
            <Route exact path='/portfolio' element={< Portfolio />}></Route> 
        </Routes> 
      </div>

      <Footer></Footer>
     
    </div>

  );
}

export default App;
