import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import NavigationBar from './components/navbar/Navbar.tsx'
import Hero from './components/hero/Hero.tsx';
import Process from './components/process/Process.tsx';

function App() {

  return (
    <>
    <div id="home">
      <NavigationBar/>
    </div>
    <div id="hero">
      <Hero/>
    </div>
    <div id="process">
      <Process/>
    </div>

    </>
  )
}

export default App
