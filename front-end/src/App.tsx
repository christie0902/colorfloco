import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import NavigationBar from './components/navbar/Navbar.tsx'
import Hero from './components/hero/Hero.tsx';

function App() {

  return (
    <>
    <div id="home">
      <NavigationBar/>
    </div>
    <div id="hero">
      <Hero/>
    </div>
    </>
  )
}

export default App
