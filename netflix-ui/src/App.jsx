import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route eaxct path="/login" element={<Login />} />
        <Route eaxct path="/signup" element={<Signup />} />
        <Route eaxct path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}
