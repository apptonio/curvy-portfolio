import React from 'react'
import Header from './Header'
import './Hero.css'
import antonio from '../images/me-grayscale.jpeg';

const Hero = () => {
    return (
        <section id="hero">
            <div>
                <img src={antonio} alt="Profile Avatar of Antonio Butigan" />
            </div>
            <Header />
            <p className="fadein">A freshly graduated Web & Mobile developer.</p>

            <hr className='line'/>

        </section>
    )
}

export default Hero