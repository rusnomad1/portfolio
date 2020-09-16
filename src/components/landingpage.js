import React from 'react';
import {Grid, Cell} from 'react-mdl'
import myPic from "./../мое фото.jpg"


function LandingPage(){
    return(
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                <Cell col ={12}>
                    
                    <img src={myPic}
                    alt="avatar"
                    className='avatar-img'
                    
                    />

                    <div className='banner-text'>
                        <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Node JS | MongoDB</p>

                        <div className="social-links">

                            {/*  LinkedIn */}
                            <a href='google.com' target="_blank">
                                <i className='fa fa-linkedin-square' arial-hidden="true"></i>
                            </a>

                            {/*  Github */}
                            <a href='google.com' target="_blank">
                                <i className='fa fa-github-square' arial-hidden="true"></i>
                            </a>

                            {/*  Youtube */}
                            <a href='google.com' target="_blank">
                                <i className='fa fa-youtube-square' arial-hidden="true"></i>
                            </a>

                            {/*  Instagram */}
                            <a href='google.com' target="_blank">
                                <i className='fa fa-instagram' arial-hidden="true"></i>
                            </a>

                        </div>

                    </div>

                </Cell>
            </Grid>

        </div>
    );
}

export default LandingPage;