import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import NavigationBar from './components/navbar/Navbar.tsx'
import Hero from './components/hero/Hero.tsx';
import Process from './components/process/Process.tsx';
import Contact from './components/contact/Contact.tsx';
import Products from "./components/products/Products.tsx";

function App() {
  return (
    <>
      <div id="home">
        <NavigationBar />
      </div>
      <div id="hero">
        <Hero />
      </div>
        <Products />
      <div id="productCarousel">
      </div>
    <div id="process">
      <Process/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
    </>
  );
}

export default App;
