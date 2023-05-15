import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
export default function App() {
  return (
    <BrowserRouter>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path="/" element={<Signup/>}></Route>
    {/* <Route exact path="/" element={<Netflix/>}></Route> */}
    </BrowserRouter>
  );
}
