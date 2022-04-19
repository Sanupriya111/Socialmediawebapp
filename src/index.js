import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Profile from'./pages/profile/Profile'
import  { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/Login'
import Register from './pages/register/Register'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
</Routes></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
