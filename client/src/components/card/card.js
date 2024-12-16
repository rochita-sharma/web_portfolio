import React from 'react';
import './card.css';

function Card() {
    return (
        <div className='introCard'>
              <div id='greetings'>Hello! <span id='wavingHello'>👋</span></div>
              <div id='Iam'>I'm</div>
              <div id='introName'>Rochita</div>
              <div id='introLine'>A Software Developer and a keen passionate learner who loves to implement the real world ideas.</div>
        </div>
    );
}

export default Card;