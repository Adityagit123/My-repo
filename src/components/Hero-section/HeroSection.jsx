import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/image1.jpg';
import './hero-section.css'
const HeroSection = () => {
return <section>
<Container>
<Row>
<Col>
<img src={heroImg} alt="" className='w-100'/>
</Col>
<Col lg='6' md='6'>

<div className="hero_content">
<h1 className='mb-4'>Author, Trainer & Speaker</h1>
<h2 className='mb-4'>Priya Jalan</h2>
<h3 className='mb-4'>Founder - Binge English</h3>
<p className='mb-4'>English Communication, Fluency, <br/> & Confidence Coach </p>

{/* <div>
    <input type="text" placeholder = "Search" />
    <button className='btn'>Search</button>
</div> */}
</div>
</Col> 

</Row>
</Container>
</section>
};
export default HeroSection;
