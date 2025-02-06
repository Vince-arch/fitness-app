import React from 'react';
import "../src/index.css"
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import  Auth  from './pages/Auth';
import  Community  from './pages/Community';
import Profile  from './pages/Profile';
import Workouts from './pages/Workouts';

function App() {

  return (
    <Router>   
        <Routes>
          <Route path="/" element={ <Home />}/>,
          <Route path='auth' element={<Auth />}/>,
          <Route path="community" element={<Community/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="workouts" element={<Workouts/>}/>
        </Routes>
    </Router>
  )
}

export default App
