import React from 'react';
import './animation.css';

function Animation() {
     return (
        <div>
            {/* <!-- partial:index.partial.html --> */}
            <div id="workspace">
            

            <div class="desk">
                {/* <!-- ===============================================/*
                /*                    Table                         /*
                /* =============================================== --> */}
                <div class="table">

                <div class="right-tb">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                {/* <!-- ===============================================/*
                /*                    Black Screen                  /*
                /* =============================================== --> */}
                <span class="bk-screen">
                    <i></i>
                </span>
                </div>
                
                {/* <!-- ===============================================/*
                /*                      Chair                       /*
                /* =============================================== --> */}
                <div class="chair">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <i class="shadows"></i>
                </div>
            
            </div>

            </div>
        </div>
     );
}

export default Animation;