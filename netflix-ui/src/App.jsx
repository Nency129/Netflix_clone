import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from './pages/Movies';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route eaxct path="/login" element={<Login />} />
        <Route eaxct path="/signup" element={<Signup />} />
        <Route eaxct path="/player" element={<Player />} />
        <Route eaxct path="/movies" element={<Movies />} />
        <Route eaxct path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}
