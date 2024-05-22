import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Meal from './Meal';
import icon from './button.png';
import Home from './Home';
import Snack from './Snack.mp4';

function App() {
  return (<Router>
    <nav>
      <Link to="/breakfast" className='link'>Breakfast</Link>
      <Link to="/lunch" className='link'>Lunch</Link>
      <Link to="/snack" className='link'>Snack</Link>
      <Link to="/" className='link'>
        <img src={icon} alt='icon' width='35px'/>
      </Link> 
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/breakfast" element={<Meal meal={'Breakfast'} video={Snack}/>}/>
      <Route path="/lunch" element={<Meal meal={'Lunch'} video={Snack}/>}/>
      <Route path="/snack" element={<Meal meal={'Snack'} video={Snack}/>}/>
    </Routes>
    </Router>
  );
}

export default App;

