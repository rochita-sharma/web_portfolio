import React from 'react';
import Animation from '../animation/animation';
import Card from '../card/card';
import Navbar from '../navbar/navbar';
import './about.css';

function About() {
    return (
        <div className='about'>
            <div className='animation'><Animation /></div>
            <div className='card'><Card /></div>
            <div><Navbar/></div>
        </div>
    );
}

export default About;