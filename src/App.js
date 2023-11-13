// App.js
import React from 'react';
import './App.css'
import Header from './components/Header/header';
import HeroSection from './components/Hero-section/HeroSection';
import Top from './components/Top-section/Top';
import Questions from './components/Questions-section/Questions';
import Dev from './components/Dev-section/Dev';
import Copyright from './components/copyright-section/copyright';
import { Dropdown } from 'reactstrap';


function App() {
  return (
    <div>
      <Top />
      <Header />
      <Dropdown/>
      <HeroSection />
      <Questions />
      <p className='end'>Master English and become a confident communicator !!! </p>
    <div class="container">
     <button type="button" onclick="#">Register</button>
    </div>
    <h2 className='start'>Achieve 3 Key Developments</h2>
      <Dev />
      <Copyright />
    </div>
  );
}

export default App;

