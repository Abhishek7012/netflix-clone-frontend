import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ForgotPassword from './login/ForgotPassword';
import Home from "./Home";
import Login from "./login/Login";
import Signup from "./login/Signup";



function AllPath()  {
    return (
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} >
          </Route>
        <Route exact path="/login" element={<Login />} >
        </Route>
        <Route exact path="/signup" element={<Signup />} >
        </Route>

        <Route  path="/forgotPassword" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
  
  );
    }
    
  
  export default AllPath;