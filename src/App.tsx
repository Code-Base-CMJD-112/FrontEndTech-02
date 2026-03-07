import React from "react";
import Nav from "./components/nav/Nav";
import Airport from "./components/airport/Airport";
import { Flights } from "./components/flights/Flights";
import { Login } from "./components/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/airports" element={<Airport />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </>
  );
}

export default App;
