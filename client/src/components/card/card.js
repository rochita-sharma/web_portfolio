import React from 'react';
import './card.css';

function Card() {
    return (
        <div className='introCard'>
              <div id='greetings'>Hello!<span id="wave">👋</span>, I am</div>
              <div id='introName' className='anim-typewriter'>Rochita</div>
              <div id='introLine'>A Software Developer and a keen passionate learner who loves to implement the real world ideas.</div>
        </div>
    );
}

export default Card;