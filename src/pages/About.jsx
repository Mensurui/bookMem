import React from 'react';
import bgImg from "../assets/images/home-hero.png"
import { Link } from "react-router-dom"
function About() {
    return ( <div className="about-page-container">
    <img src={bgImg} className="about-hero-image" alt=''/>
    <div className="about-page-content">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam pariatur quasi qui veniam esse iusto? Quam quas magni quod tempora esse hic! Architecto sequi consequuntur quasi impedit sint labore eveniet.</p>
        <p>Our team is full of book enthusiasts who know firsthand the magic of reading and enjoying books.</p>
    </div>
    <div className="about-page-cta">
        <h2>Your fullfilment is waiting.<br />Your book is ready.</h2>
        <Link className="link-button" to="/vans">Explore our books</Link>
    </div>
</div>
    )
  }
  export default About;