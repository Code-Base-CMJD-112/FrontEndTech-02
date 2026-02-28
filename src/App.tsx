import React from 'react';
import logo from './logo.svg';
import { Intro } from './components/intro/Intro';
import Nav from './components/nav/Nav';
import Airport from './components/airport/Airport';

function App() {
  let  name = "Thanura"
  return (
    <>
     <Nav/>
     <Airport/>
    </>
  );
}

export default App;
