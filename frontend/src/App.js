import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 


import Main from './Components/Basics/Main';
import AllPlan from './Components/Basics/AllPlan';
import Login from './Components/Basics/login'; 
import Signup from './Components/Basics/signup'; 

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route  exact path="/" element={<Main />} />
        <Route  exact path="/allplan" element={<AllPlan />} />
        <Route exact path="/login" element={<Login />} />
        <Route  exact path="/signup" element={<Signup />} />
      </Routes>
      
    </Router>
  );
};

export default App;
