import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Shows from "./components/Shows/Shows";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/shows" element={<Shows></Shows>} />
      </Routes>
    </>
  );
}

export default App;
