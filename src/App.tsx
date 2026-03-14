import React from "react";
import Nav from "./components/nav/Nav";
import Airport from "./components/airport/Airport";
import { Flights } from "./components/flights/Flights";
import { Login } from "./components/auth/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SignUp } from "./components/auth/SignUp";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/airports" element={<Airport />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </>
  );
}

export default App;
