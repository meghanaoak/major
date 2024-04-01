import React from 'react';
import { Link } from "react-router-dom";
import heroImg from "../../assets/img/gym-02.png";
import "./hero.css";

const Hero = () => {
  return (
     <section>
        <div className="container">
            <div className="hero_wrapper">
                {/*========hero Content========*/}
                <div className="hero_content">
                    <h2><span className='highlights'>Yoga</span> is the key to the Healthy Lifestyle</h2>
                    <p>
                    Unlock the gateway to a healthy lifestyle through yoga. <br/>
                    This ancient practice not only nurtures your physical <br/>
                    well-being by improving flexibility and strength but <br/>
                    also empowers you to find balance and reduce stress in<br/>
                     our fast-paced world. Embrace yoga as the key to <br/>
                     achieving a harmonious, holistic, and healthy life.
                    </p>
                    {/* <div className="hero_btns">
                        <button className="register_btn">
                            Get Started
                        </button>
                        <button className="watch_btn">
                            <span><i class="ri-play-fill"></i> </span>
                            Watch Video
                        </button>
                    </div> */}
                    <div className="hero_btns btn-section">
                        <Link to ="/start">
                        <button className="register_btn btn start-btn" style={{ backgroundColor: '#fec007', borderColor: '#fec007', textAlign: 'center' }}>
                            Get Started
                        </button>
                        </Link>
                         <Link to="/tutorials">
                         <button className="watch_btn btn start-btn" style={{ backgroundColor: '#fec007', borderColor: '#fec007', textAlign: 'center' }}>
                             
                            Instructions
                        </button>
                        </Link>
                    </div>
                </div>
                {/*==============hero img===========*/}
                <div className="hero_img">
                    <div className="hero_img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box_img">
                                        <img src={heroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="heart_rate">
                            <h5>Heart Rate</h5>
                            <span><i class= "ri-heart-pulse-fill"></i></span>
                            <h5>78 BPM</h5>
                        </div>

                        {/*<div className="gym_location">
                            <span><i class="ri-map-pin-2-fill"></i></span>
                            <h5>Find a new <br/> gym near you</h5>
                </div>

                        <div className="dumble_icon">
                            <img src={dumbleIcon} alt="" />
                        </div>*/}

                    </div>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Hero;