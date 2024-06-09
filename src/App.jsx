import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}