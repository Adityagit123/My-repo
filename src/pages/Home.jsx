import React, { Fragment } from 'react'
import Header from '..header/components/Header/header'
import HeroSection from '../components/Hero-section/HeroSection'
import Top from '../components/Top-section/Top'
import Questions from '../components/Questions-section/Questions'
import Dev from '../components/Dev-section/Dev'
import Copyright from '../components/copyright-section/copyright'
import  './home.css'


const Home = () => {
  return <Fragment>
    <Top/>
    <Header/>
    <HeroSection/>
    <Questions/>
    <p className='end'>Master English and become a confident communicator !!! </p>
    <div class="container">
     <button type="button" onclick="#">Register</button>
    </div>
    <h2 className='start'>Achieve 3 Key Developments</h2>
   <Dev/>
   <Copyright/>
  </Fragment>
}

export default Home;
