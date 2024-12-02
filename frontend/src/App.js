import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Signup from "./component/Signup";
import EmployeeRegistry from './component/EmployeeRegistry'

const App = () => {
  
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Signup />} />        
        <Route path="/" element={<EmployeeRegistry />} />  
      </Routes>
    </Router>
  );
};

export default App;