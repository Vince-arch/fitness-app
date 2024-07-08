import React from 'react';
import "../src/index.css"
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <Router>   
        <Routes>
          <Route path="/" element={ <Home />}>
           
          </Route>
        </Routes>
    </Router>
  )
}

export default App
