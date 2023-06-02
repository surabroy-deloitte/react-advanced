import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { WeatherDetails } from './components/WeatherDetails/WeatherDetails';
import { Home } from './components/Home/Home';

function App() {
  // const list:any=[]
  const [list, setList] = useState<string[]>([]);
  // const location=useLocation()
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weatherDetails'element={<WeatherDetails/>}/>
      </Routes>
      
    </Router>
    </>
    
  );
}

export default App;
